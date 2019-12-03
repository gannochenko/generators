const path = require('path');
const process = require('process');
const fs = require('fs');
const yaml = require('js-yaml');

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    setContext(context) {
        this.context = context;
    }

    getName() {
        return 'Node/Express backend';
    }

    getQuestions() {
        return [
            {
                type: 'input',
                name: 'application_code',
                message: 'Application code',
                validate: async (value) => {
                    if (typeof value !== 'string') {
                        return 'Must be a string';
                    }

                    if (!value.match(/^[a-zA-Z0-9-_\.]+$/)) {
                        return 'Must contain only letters, digits, _, - and . signs';
                    }

                    const dst = path.join(process.cwd(), value);
                    if (await this.util.pathExists(dst)) {
                        return `Folder exists: ${dst}`;
                    }

                    return true;
                },
            },
            {
                type: 'input',
                name: 'application_name',
                message: 'Application name',
            },
            {
                type: 'input',
                name: 'port',
                message: 'Port number',
                default: 4000,
                validate: async (value) => {
                    if (typeof value !== 'string') {
                        return true; // the default value will be used
                    }

                    value = parseInt(value, 10);
                    if (isNaN(value) || value < 0 || value > 65535) {
                        return `Must be a number between 0 and 65535`;
                    }

                    return true;
                },
            },
            {
                type: 'input',
                name: 'vendor_name',
                message: 'Vendor name (to publish at the DockerHub, etc.)',
            },
            {
                type: 'confirm',
                name: 'is_monorepo',
                message: 'Are we inside a monorepo?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_rest',
                message: 'Do we have REST?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_graphql',
                message: 'Do we have GraphQL?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_grpc',
                message: 'Do we have gRPC?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_postgres',
                message: 'Do we have a database?',
                default: false,
            },
            {
                type: 'input',
                name: 'database_name',
                message: 'Database name',
                when: answers => {
                    return answers.use_postgres;
                },
                validate: async (value) => {
                    if (!value.match(/^[a-z0-9_]+$/)) {
                        return 'Must contain only letters, digits and _ sign';
                    }

                    return true;
                },
            },
            {
                type: 'confirm',
                name: 'use_static',
                message: 'Do we serve any static content?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_heroku',
                message: 'Will this container be deployed to Heroku?',
                default: false,
            },
        ];
    }

    refineAnswers(answers) {
        answers.port = answers.port || 4000;
        answers.debugger_port = parseInt(answers.port, 10) + 1;
        answers.application_folder = answers.is_monorepo ? `app.${answers.application_code}` : answers.application_code;
        answers.application_code_global = answers.application_code;
        if (answers.is_monorepo) {
            answers.application_code_global = `${path.basename(process.cwd())}_${answers.application_code}`;
        }

        answers.application_code_kebab = this.util.textConverter.toKebab(answers.application_code);
        answers.application_code_pascal = this.util.textConverter.toPascal(answers.application_code);
        answers.vendor_name_kebab = this.util.textConverter.toKebab(answers.vendor_name);

        this.answers = answers;

        return answers;
    }

    getDependencies(answers) {
        const { use_postgres, use_graphql, use_grpc } = answers;

        return {
            destination: '[application_folder]/',
            packages: [
                '@babel/polyfill', // todo: check this

                // express
                'express',
                'body-parser',
                'cors',
                'helmet',
                '@bucket-of-bolts/express-mvc',

                // graphql
                !!use_graphql && 'graphql',
                !!use_graphql && 'apollo-server-express',
                !!use_graphql && 'merge-graphql-schemas',

                // database
                !!use_postgres && 'typeorm',
                !!use_postgres && 'pg',

                // grpc
                !!use_grpc && 'grpc',

                // other
                'debug',
                '@bucket-of-bolts/util',
                '@bucket-of-bolts/microdash',
                'moment',
            ],
        };
    }

    getDevDependencies(answers) {
        const { use_graphql, use_grpc } = answers;

        return {
            destination: '[application_folder]/',
            packages: [
                // babel
                'babel-loader',
                '@babel/core',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-decorators',
                '@babel/plugin-transform-runtime',
                '@babel/preset-env',
                !!use_graphql && 'babel-plugin-import-graphql',
                'babel-plugin-transform-es2015-modules-commonjs',
                '@babel/preset-typescript',

                // typescript
                'typescript',
                '@types/helmet',
                '@types/jest',
                '@types/node',
                'ts-node',
                '@types/cors',

                // testing
                !!use_graphql && 'apollo-server-testing',
                'jest',
                'supertest',
                'ts-jest',

                // lint
                'eslint',
                'babel-eslint',
                'eslint-loader',
                'eslint-config-airbnb-base',
                'eslint-config-prettier',
                'eslint-plugin-import',
                'eslint-plugin-prettier',
                '@typescript-eslint/eslint-plugin',
                '@typescript-eslint/parser',

                // code format
                'husky',
                'prettier',
                'pretty-quick',

                // webpack
                'webpack',
                'nodemon-webpack-plugin',
                'ts-loader',
                'webpack-cli',
                'webpack-merge',
                'webpack-node-externals',
                !!use_graphql && 'graphql-tag',
                'copy-webpack-plugin',

                // grpc
                !!use_grpc && '@grpc/proto-loader',

                // other
                'fork-ts-checker-webpack-plugin-alt',
                'leasot',
                'nodemon',
            ],
        };
    }

    async onAfterExecution() {
        await this.addToComposition();
        await this.makeScriptsExecutable();
        await this.runLinter();
    }

    async addToComposition() {
        const { pathExists, ejs } = this.util;
        if (this.answers.is_monorepo) {
            const cDevPath = path.join(process.cwd(), 'infra', 'development.yml');
            if (!await pathExists(cDevPath)) {
                return;
            }

            const devPart = path.join(this.context.generatorPath, 'template.composition.yml');
            if (!await pathExists(devPart)) {
                return;
            }

            const part = await new Promise((resolve, reject) => {
                ejs.renderFile(devPart, this.answers, {}, (err, str) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(str);
                    }
                });
            });

            let ymlPart = yaml.safeLoad(part);

            // some hard-coded fixes
            ymlPart.depends_on = ymlPart.depends_on || [];

            const ymlWhole = yaml.safeLoad(fs.readFileSync(cDevPath, 'utf8'));
            ymlWhole.services = ymlWhole.services || {};
            ymlWhole.services[this.answers.application_code] = ymlPart;

            fs.writeFileSync(cDevPath, yaml.safeDump(ymlWhole));
        }
    }

    async makeScriptsExecutable() {
        const { execa, pathExists } = this.util;

        const scriptsPath = path.join(this.context.destinationPath, this.answers.application_folder, 'script');
        if (await pathExists(scriptsPath)) {
            await execa('chmod', ['-R', '+x', scriptsPath], {
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }

    async runLinter() {
        const { execa, pathExists } = this.util;

        const applicationFolder = path.join(this.context.destinationPath, this.answers.application_folder);
        if (await pathExists(applicationFolder)) {
            await execa('yarn', ['run', 'lint:fix'], {
                cwd: applicationFolder,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }
};

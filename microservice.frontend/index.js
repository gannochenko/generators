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
        return 'React/Redux/Saga frontend';
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
                name: 'api_port',
                message: 'API port number',
                default: 3000,
                when: answers => {
                    return answers.use_rest;
                },
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
                name: 'use_materialui',
                message: 'Do we have MaterialUI?',
                default: false,
            },
        ];
    }

    refineAnswers(answers) {
        answers.port = answers.port || 4000;
        answers.api_port = answers.api_port || 3000;
        answers.port_hmr = parseInt(answers.port, 10) + 1;
        answers.port_bundle_analyzer = parseInt(answers.port, 10) + 10;
        answers.application_folder = answers.is_monorepo ? `app.${answers.application_code}` : answers.application_code;
        answers.application_code_global = answers.application_code;
        if (answers.is_monorepo) {
            answers.application_code_global = `${path.basename(process.cwd())}_${answers.application_code}`;
        }

        this.answers = answers;

        return answers;
    }

    getDependencies(answers) {
        const { use_graphql, use_rest, use_materialui } = answers;

        return {
            destination: '[application_folder]/',
            packages: [
                // babel
                '@babel/polyfill',

                // express (server-side)
                'express',
                'body-parser',
                'cors',
                'helmet',

                // aux
                'debug',
                '@bucket-of-bolts/util',
                '@bucket-of-bolts/ui',

                // front
                'react',
                'react-dom',
                'redux',
                'redux-logger',
                'redux-saga',
                'react-redux',
                'react-router',
                'react-router-dom',
                'connected-react-router',
                'history',

                // styles
                'styled-components',
                '@bucket-of-bolts/styled-companion',

                // demo ui
                use_materialui && '@material-ui/core',
                use_materialui && '@material-ui/icons',

                // graphql
                use_graphql && 'graphql',
                use_graphql && 'graphql-tag',

                // networking
                use_graphql && 'apollo-client',
                use_graphql && 'apollo-cache-inmemory',
                use_graphql && 'apollo-link-http',
                use_graphql && 'apollo-link',
                use_graphql && 'apollo-link-error',
                use_rest && 'axios',

                // for Material UI
                use_materialui && 'jss',
                use_materialui && 'classnames',

                // other
                'moment',
                'prop-types', // required now, should be removed later
            ],
        };
    }

    getDevDependencies(answers) {
        const { use_graphql, use_rest } = answers;

        return {
            destination: '[application_folder]/',
            packages: [
                // babel
                '@babel/core',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-decorators',
                '@babel/plugin-transform-runtime',
                '@babel/preset-env',
                '@babel/preset-react',
                'babel-eslint',
                'babel-loader',
                'babel-plugin-styled-components',
                'babel-polyfill',

                // lint
                'eslint',
                'eslint-config-airbnb-base',
                'eslint-config-prettier',
                'eslint-plugin-import',
                'eslint-plugin-prettier',
                'eslint-plugin-react',
                'eslint-plugin-jsx-a11y',
                'eslint-plugin-react-hooks',
                'eslint-loader',

                // dev cycle
                'npm-run-all',
                'webpack-bundle-analyzer',
                'leasot',

                // codestyle
                'husky',
                'prettier',
                'pretty-quick',

                // webpack
                'start-server-webpack-plugin',
                'url-loader',
                'file-loader',
                'raw-loader',
                'webpack',
                'webpack-cli',
                'webpack-node-externals',
                'webpack-dev-server',

                // testing
                'jest',
                '@testing-library/react',
                '@testing-library/user-event',
                'jest-dom',
                'redux-mock-store',

                // hmr
                'react-hot-loader',

                // typescript
                'fork-ts-checker-webpack-plugin-alt',
                'react-dev-utils',
                'typescript',
                '@babel/preset-typescript',
                '@typescript-eslint/eslint-plugin',
                '@typescript-eslint/parser',

                // types
                '@types/styled-components',
                '@types/react-redux',
                '@types/react-router-dom',
                '@types/react-router',
                '@types/history',
                '@types/redux-logger',
                '@types/express',
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

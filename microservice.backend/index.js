const path = require('path');
const process = require('process');

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Microservice backend';
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
                name: 'vendor_name',
                message: 'Vendor name (to publish at the DockerHub, etc.)',
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
                name: 'is_monorepo',
                message: 'Are we inside a monorepo?',
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
        answers.port = answers.port || 3000;
        answers.debugger_port = parseInt(answers.port, 10) + 1;
        answers.application_folder = answers.is_monorepo ? `app.${answers.application_code}` : answers.application_code;
        answers.application_code_global = answers.application_code;
        if (answers.is_monorepo) {
            answers.application_code_global = `${path.basename(process.cwd())}_${answers.application_code}`;
        }

        console.log(answers);
        
        answers.application_code_kebab = this.util.textConverter.toKebab(answers.application_code);
        answers.vendor_name_kebab = this.util.textConverter.toKebab(answers.vendor_name);

        return answers;
    }

    getDependencies(answers) {
        const { use_postgres, use_graphql } = answers;

        return {
            destination: '[application_code]/',
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

                // other
                'debug',
                '@bucket-of-bolts/util',
                '@bucket-of-bolts/microdash',
                'moment',
            ],
        };
    }

    getDevDependencies(answers) {
        const { use_graphql } = answers;

        return {
            destination: '[application_code]/',
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

                // other
                'fork-ts-checker-webpack-plugin-alt',
                'leasot',
                'nodemon',
            ],
        };
    }
};

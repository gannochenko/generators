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
                name: 'service_code',
                message: 'Service code',
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
                message: 'Do we have Postgres?',
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
        ];
    }

    getDependencies() {
        return {
            destination: '[service_code]/',
            packages: [
                '@babel/polyfill', // todo: check this

                // express
                'express',
                'body-parser',
                'cors',
                'helmet',
                '@bucket-of-bolts/express-mvc',

                // graphql
                'graphql',
                'apollo-server-express',
                'merge-graphql-schemas',

                // other
                'debug',
                '@bucket-of-bolts/util',
                '@bucket-of-bolts/microdash',

                // database
                'typeorm',
                'pg',
            ],
        };
    }

    getDevDependencies() {
        return {
            destination: '[service_code]/',
            packages: [
                // babel
                'babel-loader',
                '@babel/core',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-decorators',
                '@babel/plugin-transform-runtime',
                '@babel/preset-env',
                'babel-plugin-import-graphql',
                'babel-plugin-transform-es2015-modules-commonjs',
                '@babel/preset-typescript',

                // typescript
                'typescript',
                '@types/helmet',
                '@types/jest',
                '@types/node',

                // testing
                'apollo-server-testing',
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
                'graphql-tag',

                // other
                'fork-ts-checker-webpack-plugin-alt',
                'leasot',
                'nodemon',
                'moment',
            ],
        };
    }
};

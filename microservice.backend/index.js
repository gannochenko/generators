module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Microservice backend';
    }

    getQuestions() {
        return [
            // {
            //     type: 'input',
            //     name: 'composition_code',
            //     message: 'Composition code',
            //     validate: async (value) => {
            //         if (typeof value !== 'string') {
            //             return 'Must be a string';
            //         }
            //
            //         if (!value.match(/^[a-zA-Z0-9-_\.]+$/)) {
            //             return 'Must contain only letters, digits, _, - and . signs';
            //         }
            //
            //         // const dst = path.join(process.cwd(), value);
            //         // if (await pathExists(dst)) {
            //         //     return `Folder exists: ${dst}`;
            //         // }
            //
            //         return true;
            //     },
            // },
            // {
            //     type: 'confirm',
            //     name: 'use_postgres',
            //     message: 'Do we have Postgres?',
            //     default: false,
            // },
            // {
            //     type: 'input',
            //     name: 'database_name',
            //     message: 'Database name',
            //     when: answers => {
            //         return answers.use_postgres;
            //     },
            //     validate: async (value) => {
            //         if (!value.match(/^[a-z0-9_]+$/)) {
            //             return 'Must contain only letters, digits and _ sign';
            //         }
            //
            //         return true;
            //     },
            // },
            // {
            //     type: 'confirm',
            //     name: 'use_cache',
            //     message: 'Do we have Redis as cache?',
            //     default: false,
            // },
            // {
            //     type: 'confirm',
            //     name: 'use_broker',
            //     message: 'Do we have Redis as a message broker?',
            //     default: false,
            // },
        ];
    }

    getDependencies() {

        // "@apollographql/graphql-playground-html": "^1.6.20",
        //     "@babel/plugin-proposal-class-properties": "^7.5.5",
        //     "@babel/plugin-proposal-decorators": "^7.4.4",
        //     "@babel/polyfill": "^7.2.5",
        //     "@babel/preset-typescript": "^7.3.3",
        //     "@bucket-of-bolts/express-mvc": "^1.0.4",
        //     "@bucket-of-bolts/microdash": "^1.0.4",
        //     "@bucket-of-bolts/util": "^1.0.4",
        //     "@project-minimum/core": "^1.0.0",
        //     "@typescript-eslint/eslint-plugin": "^1.12.0",
        //     "@typescript-eslint/parser": "^1.12.0",
        //     "accepts": "^1.3.7",
        //     "apollo-server-core": "^2.9.0",
        //     "apollo-server-express": "^2.4.8",
        //     "body-parser": "^1.18.3",
        //     "cors": "^2.8.5",
        //     "dataloader": "^1.4.0",
        //     "debug": "^4.1.1",
        //     "eslint-loader": "^2.2.1",
        //     "eslint-plugin-jsx-a11y": "^6.2.3",
        //     "express": "^4.16.4",
        //     "graphql": "^14.0.2",
        //     "helmet": "^3.15.1",
        //     "md5": "^2.2.1",
        //     "merge-graphql-schemas": "^1.5.8",
        //     "pg": "^7.8.1",
        //     "redis-tag-cache": "^1.2.1",
        //     "reflect-metadata": "^0.1.13",
        //     "ts-node": "^8.3.0",
        //     "typeorm": "^0.2.14",
        //     "uuid": "^3.3.2"

        return {
            destination: '[service_name]/',
            packages: [
                '@babel/polyfill', // todo: check this
                '@bucket-of-bolts/util',
                '@bucket-of-bolts/express-mvc',
                '@bucket-of-bolts/microdash',
                'path',
                'helmet',
                'express',
            ],
        };
    }

    getDevDependencies() {

        // "@babel/core": "^7.3.4",
        //     "@babel/plugin-proposal-object-rest-spread": "^7.3.4",
        //     "@babel/plugin-transform-runtime": "^7.3.4",
        //     "@babel/preset-env": "^7.3.4",
        //     "@babel/preset-stage-0": "^7.0.0",
        //     "@types/helmet": "^0.0.44",
        //     "@types/jest": "^24.0.18",
        //     "@types/node": "^11.10.4",
        //     "apollo-server-testing": "^2.4.8",
        //     "babel-eslint": "^10.0.1",
        //     "babel-loader": "^8.0.5",
        //     "babel-plugin-import-graphql": "^2.6.2",
        //     "babel-plugin-transform-es2015-modules-commonjs": "^6.26.2",
        //     "eslint": "^5.15.0",
        //     "eslint-config-airbnb-base": "^13.1.0",
        //     "eslint-config-prettier": "^4.1.0",
        //     "eslint-plugin-import": "^2.16.0",
        //     "eslint-plugin-prettier": "^3.0.1",
        //     "fork-ts-checker-webpack-plugin-alt": "^0.4.14",
        //     "graphql-tag": "^2.10.1",
        //     "husky": "^1.3.1",
        //     "jest": "^24.1.0",
        //     "leasot": "^7.3.4",
        //     "nodemon": "^1.18.10",
        //     "nodemon-webpack-plugin": "^4.0.7",
        //     "prettier": "^1.16.4",
        //     "pretty-quick": "^1.10.0",
        //     "supertest": "^3.4.2",
        //     "ts-jest": "^24.0.2",
        //     "ts-loader": "^5.3.3",
        //     "typescript": "^3.3.3333",
        //     "webpack": "^4.39.2",
        //     "webpack-cli": "^3.2.3",
        //     "webpack-merge": "^4.2.1",
        //     "webpack-node-externals": "^1.7.2"

        return {
            destination: '[service_name]/',
            packages: [],
        };
    }
};

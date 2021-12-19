const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'NestJS application';
    }

    async getQuestions() {
        const projectCode = path.basename(path.dirname(process.cwd()));

        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Application name',
                name: 'application_name',
            },
            {
                message: 'Application code',
                name: 'application_code',
                default: (answers) => {
                    return this.util.textConverter.toKebab(
                        answers.application_name,
                    )
                },
            },
            {
                message: 'GitHub account name',
                name: 'github_account_name',
                default: 'gannochenko',
            },
            {
                message: 'GitHub repository name',
                name: 'github_repository_name',
                default: () => {
                    return projectCode;
                },
            },
            // {
            //     type: 'confirm',
            //     name: 'use_nats',
            //     message: 'Enable nats?',
            //     default: false,
            // },
            {
                name: 'port',
                message: 'What is the TCP port?',
                default: 3000,
            },
            {
                message: 'DockerHub account name',
                name: 'dockerhub_account_name',
                default: (answers) => {
                    return answers.github_account_name;
                },
            },
        ];
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.application_code_kebab = this.util.textConverter.toKebab(
            answers.application_code,
        );

        answers.application_code_global = answers.application_code;

        answers.use_nats = !!answers.use_nats;

        return answers;
    }

    async getDependencies(answers) {
        const { use_nats } = answers;
        return {
            destination: '[application_code_kebab]/',
            packages: [
                '@nestjs/common',
                '@nestjs/core',
                '@nestjs/graphql',
                '@nestjs/platform-express',
                '@nestjs/swagger',
                '@nestjs/typeorm',
                !!use_nats && '@nestjs/microservices',
                'apollo-server-express',
                'class-transformer',
                'class-validator',
                'express-jwt',
                'express-rate-limit',
                'fastify-swagger',
                'graphql',
                'graphql-query-complexity',
                'graphql-tools',
                'helmet',
                'jwks-rsa',
                'pg',
                'reflect-metadata',
                'rimraf',
                'rxjs',
                'swagger-ui-express',
                'typeorm',
                !!use_nats && 'nats',
            ],
        };
    }

    async getDevDependencies(answers) {
        return {
            destination: '[application_code_kebab]/',
            packages: [
                '@nestjs/schematics',
                '@nestjs/testing',
                '@types/express',
                '@types/jest',
                '@types/node',
                '@types/supertest',
                '@types/flat',
                '@typescript-eslint/eslint-plugin',
                '@typescript-eslint/parser',
                'dotenv-cli',
                'eslint',
                'eslint-config-prettier',
                'eslint-plugin-prettier',
                'husky',
                'jest',
                'prettier',
                'pretty-quick',
                'supertest',
                'ts-jest',
                'ts-loader',
                'ts-node',
                'tsconfig-paths',
                'typescript',
                'debug',
            ],
        };
    }

    // async onAfterExecution() {
    //     // do something after the code gets generated
    //     console.log('onAfterExecution()');
    //     await this.util.execa('git', ['init'], {
    //         cwd: path.join(
    //             this.context.destinationPath,
    //             this.answers.application_code_kebab,
    //         ),
    //         stdio: ['inherit', 'inherit', 'inherit'],
    //     });
    // }
};

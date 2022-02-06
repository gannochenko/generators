const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'Serverless application';
    }

    async getQuestions() {
        const projectCode = path.basename(path.dirname(process.cwd()));

        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Application code',
                name: 'application_code',
            },
            {
                message: 'Project name',
                name: 'project_name',
            },
            {
                message: 'Add contact form API?',
                name: 'use_contact_form',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Add API?',
                name: 'use_api',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Entity name',
                name: 'entity_name',
                when: (answers) => answers.use_api,
            },
            {
                message: 'API path prefix',
                name: 'api_path_prefix',
                when: (answers) => answers.use_api,
                default: 'api',
            },
            {
                message: 'Function name',
                name: 'function_name',
            },
            {
                message: 'Project domain',
                name: 'project_domain',
                when: (answers) => answers.use_contact_form,
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
            {
                message: 'Author name',
                name: 'author_name',
                default: 'Sergei Gannochenko',
            },
            {
                message: 'Author email',
                name: 'author_email',
                default: 'gannochenko.sv@gmail.com',
            },
            {
                message: 'Local development port',
                name: 'local_development_port',
                default: 3000,
            },
        ];
    }

    async refineAnswers(answers) {
        // parent project code
        answers.project_code = path.basename(path.dirname(process.cwd()));
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );
        answers.project_code_tf = answers.project_code_kebab.replace(/[^a-zA-Z0-9_]/g, '-');

        // here it is possible to alter some answers before the generation starts
        answers.application_code_kebab = this.util.textConverter.toKebab(
            answers.application_code,
        );
        answers.application_code_tf = answers.application_code_kebab.replace(/[^a-zA-Z0-9_]/g, '-');
        answers.use_function = !!answers.function_name;

        answers.use_api = !!answers.use_api;
        answers.entity_name = answers.entity_name ?? '';
        answers.entity_name_camel = this.util.textConverter.toPascal(
            answers.entity_name,
        );
        answers.entity_name_lc = answers.entity_name_camel.toLowerCase();
        answers.entity_name_su = this.util.textConverter.toSnake(
            answers.entity_name,
        ).toUpperCase();
        answers.local_development_port = parseInt(answers.local_development_port, 10);

        answers.api_path_prefix = answers.api_path_prefix ?? '';

        return answers;
    }

    async getDependencies(answers) {
        const { use_contact_form, use_api } = answers;

        return {
            destination: '[application_code_kebab]/',
            packages: [
                'cors',
                'aws-sdk',
                ...(
                    use_contact_form ? ['axios', 'pug'] : []
                ),
                ...(use_api ? [
                    '@nestjs/common',
                    '@nestjs/core',
                    '@nestjs/microservices',
                    '@nestjs/platform-express',
                    '@nestjs/platform-socket.io',
                    '@nestjs/websockets',
                    'amqp-connection-manager',
                    'amqplib',
                    'aws-lambda',
                    'aws-serverless-express',
                    'body-parser',
                    'bufferutil',
                    'cache-manager',
                    'class-transformer',
                    'class-validator',
                    'helmet',
                    'kafkajs',
                    'latinize',
                    'mqtt',
                    'nats',
                    'redis',
                    'reflect-metadata',
                    'rxjs',
                    'serverless-offline',
                    'uuid',
                ] : []),
            ],
        };
    }

    async getDevDependencies(answers) {
        const { use_contact_form, use_api } = answers;

        return {
            destination: '[application_code_kebab]/',
            packages: [
                '@types/cors',
                '@types/ejs',
                '@types/express',
                'dotenv-cli',
                'dotenv-webpack',
                'express',
                'ts-loader',
                'ts-node',
                'typescript',
                'webpack',
                'webpack-cli',
                'webpack-node-externals',
                !!use_contact_form && '@types/pug',
                'serverless',
                'serverless-offline',
                'serverless-webpack',

                ...(use_api ? [
                    '@types/aws-lambda',
                    '@types/aws-serverless-express',
                    '@types/latinize',
                    '@types/uuid',
                    '@types/aws-lambda',
                    '@types/aws-lambda',
                    'serverless',
                    'serverless-webpack',
                ] : []),
            ],
        };
    }

    async onAfterExecution() {
        const applicationCode = this.answers.application_code_kebab;
        const applicationFolder = path.join(
            this.context.destinationPath,
            applicationCode,
        );

        await this.util.execa('chmod', ['-R', '+x', './script'], {
            cwd: applicationFolder,
            stdio: ['inherit', 'inherit', 'inherit'],
        });

        await this.util.execa('mv', [
            path.join(applicationFolder, `cd.${applicationCode}.yml`, '../../.github/workflows')
        ], {
            cwd: applicationFolder,
            stdio: ['inherit', 'inherit', 'inherit'],
        });
    }
};

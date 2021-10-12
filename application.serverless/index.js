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
                message: 'Add contact form?',
                name: 'use_contact_form',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Project name',
                name: 'project_name',
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

        return answers;
    }

    async getDependencies(answers) {
        const { use_contact_form } = answers;

        return {
            destination: '[application_code_kebab]/',
            packages: ['cors', !!use_contact_form && 'axios', !!use_contact_form && 'pug', 'aws-sdk'],
        };
    }

    async getDevDependencies(answers) {
        const { use_contact_form } = answers;

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
            ],
        };
    }

    async onAfterExecution() {
        await this.util.execa('chmod', ['-R', '+x', './script'], {
            cwd: path.join(
                this.context.destinationPath,
                this.answers.project_code_kebab,
            ),
            stdio: ['inherit', 'inherit', 'inherit'],
        });
    }
};

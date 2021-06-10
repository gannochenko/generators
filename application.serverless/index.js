const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'Serverless application';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Project code',
                name: 'project_code',
            },
        ];
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );

        return answers;
    }

    async getDependencies(answers) {
        return {
            destination: '[project_code_kebab]/',
            packages: ['cors'],
        };
    }

    async getDevDependencies(answers) {
        return {
            destination: '[project_code_kebab]/',
            packages: [
                '@types/cors',
                '@types/ejs',
                '@types/express',
                'dotenv-cli',
                'dotenv-webpack',
                'express',
                'nodemon',
                'ts-loader',
                'ts-node',
                'typescript',
                'webpack',
                'webpack-cli',
                'webpack-node-externals',
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

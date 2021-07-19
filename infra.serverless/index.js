const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'Infra for the serverless application';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Application code',
                name: 'project_code',
            },
            {
                message: 'Function name',
                name: 'function_name',
            },
            {
                message: 'Add contact form lambda?',
                name: 'use_contact_form',
                type: 'confirm',
                default: false,
            },
        ];
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );
        answers.use_function = !!answers.function_name;

        return answers;
    }

    // async getDependencies(answers) {
    //     return {
    //         destination: '[project_code_kebab]/',
    //         packages: ['cors'],
    //     };
    // }
    //
    // async getDevDependencies(answers) {
    //     return {
    //         destination: '[project_code_kebab]/',
    //         packages: [
    //         ],
    //     };
    // }

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

const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return ' infra.gatsby';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Application code',
                name: 'application_code',
            },
            {
                message: 'Is there any API we rely on?',
                name: 'use_api',
                type: 'confirm',
                default: false,
            },
            {
                message: 'GitHub account name',
                name: 'github_account_name',
                default: 'gannochenko',
            },
            {
                message: 'GitHub repository name',
                name: 'github_repository_name',
                default: (answers) => {
                    return answers.application_code;
                },
            },
        ];
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.application_code_kebab = this.util.textConverter.toKebab(
            answers.application_code,
        );
        answers.application_code_tf = answers.application_code_kebab.replace(/[^a-zA-Z0-9_]/g, '-');
        answers.use_api = !!answers.use_api;

        return answers;
    }
};

const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'Project infrastructure';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Project code',
                name: 'project_code',
            },
            {
                name: 'github_account_name',
                message: 'What is the GitHub account name?',
            },
            {
                message: 'Repository name',
                name: 'github_repository_name',
                default: ({project_code}) => `${project_code}_infra`,
            },
            {
                message: 'Project apex domain',
                name: 'apex_domain',
                default: ({project_code}) => `${project_code}.app`,
            },
        ];
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.project_code_infra_kebab = `${this.util.textConverter.toKebab(
            answers.project_code,
        )}_infra`;
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );
        answers.project_code_tf = answers.project_code_kebab.replace(/[^a-zA-Z0-9_]/g, '-');

        return answers;
    }

    async onAfterExecution() {
        await this.util.execa('chmod', ['-R', '+x', './script/*'], {
            cwd: path.join(
                this.context.destinationPath,
                this.answers.project_code_infra_kebab,
            ),
            stdio: ['inherit', 'inherit', 'inherit'],
        });
    }
};

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
                message: 'Project code:',
                name: 'project_code',
            },
            {
                message: 'Repository name:',
                name: 'repo_name',
                default: ({project_code}) => `${project_code}_infra`,
            },
            {
                message: 'Project apex domain:',
                name: 'apex_domain',
                default: ({project_code}) => `${project_code}.app`,
            },
        ];
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.package_name_kebab = this.util.textConverter.toKebab(
            answers.package_name,
        );

        return answers;
    }

    async onAfterExecution() {
        await this.util.execa('chmod', ['-R', '+x', './script/*'], {
            cwd: path.join(
                this.context.destinationPath,
                this.answers.package_name_kebab,
            ),
            stdio: ['inherit', 'inherit', 'inherit'],
        });
    }
};

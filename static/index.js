const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'static';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'What will be the project code?',
                name: 'project_code',
            },
            {
                message: 'What will be the website domain?',
                name: 'project_domain',
            },
            {
                message: 'Project web title',
                name: 'project_web_title',
                default: 'New project',
            },
            {
                message: 'Project PWA name',
                name: 'project_pwa_name',
                default: 'New project',
            },
            {
                message: 'Project PWA short name',
                name: 'project_pwa_short_name',
                default: 'New project',
            },
            {
                message: 'Project description',
                name: 'project_description',
                default: 'New project',
            },
            {
                message: 'GitHub account name',
                name: 'github_account_name',
            },
            {
                message: 'GitHub repository name',
                name: 'github_repository_name',
            },
            {
                message: 'Author name',
                name: 'author_name',
            },
            {
                message: 'Google Analytics ID',
                name: 'ga_id',
            },
            {
                message: 'Bootstrap blog?',
                name: 'ga_id',
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

        return answers;
    }

    async getDependencies(answers) {
        // list your dependencies here
        const { use_react } = answers;

        return {
            destination: '[project_name_kebab]/',
            packages: [!!use_react && 'react', !!use_react && 'react-dom'],
        };
    }

    async getDevDependencies(answers) {
        // list your dev dependencies here
        const { use_react } = answers;

        return {
            destination: '[project_name_kebab]/',
            packages: ['jest', !!use_react && '@testing-library/react'],
        };
    }

    // async onAfterExecution() {
    //     // do something after the code gets generated
    //     console.log('onAfterExecution()');
    //     await this.util.execa('git', ['init'], {
    //         cwd: path.join(
    //             this.context.destinationPath,
    //             this.answers.package_name_kebab,
    //         ),
    //         stdio: ['inherit', 'inherit', 'inherit'],
    //     });
    // }
};

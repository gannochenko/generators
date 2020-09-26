const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'NextJS React application';
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
                message: 'Domain name',
                name: 'project_domain',
            },
            {
                message: 'Project name',
                name: 'project_name',
                default: 'New project',
            },
            // {
            //     message: 'Project short name',
            //     name: 'project_pwa_short_name',
            //     default: 'New project',
            // },
            {
                message: 'Project description',
                name: 'project_description',
                default: 'New project',
            },
            // {
            //     message: 'GitHub account name',
            //     name: 'github_account_name',
            // },
            // {
            //     message: 'GitHub repository name',
            //     name: 'github_repository_name',
            // },
            // {
            //     message: 'Author name',
            //     name: 'author_name',
            // },
            // {
            //     message: 'Author email',
            //     name: 'author_email',
            // },
            // {
            //     message: 'Google Analytics ID',
            //     name: 'ga_id',
            // },
            {
                message: 'Author name on Twitter',
                name: 'author_name_twitter',
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
            packages: [
                'next',
                'react',
                'react-dom',
                '@material-ui/core',
                'styled-components',
            ],
        };
    }

    async getDevDependencies(answers) {
        return {
            destination: '[project_code_kebab]/',
            packages: [
                '@types/node',
                '@types/react',
                '@types/styled-components',
                '@typescript-eslint/eslint-plugin',
                '@typescript-eslint/parser',
                'babel-plugin-styled-components',
                'eslint',
                'eslint-config-airbnb-base',
                'eslint-config-prettier',
                'eslint-plugin-import',
                'eslint-plugin-jsx-a11y',
                'eslint-plugin-prettier',
                'eslint-plugin-react',
                'eslint-plugin-react-hooks',
                'favicons-webpack-plugin',
                'hasky',
                'next-images',
                'next-pwa',
                'prettier',
                'pretty-quick',
                'typescript',
            ],
        };
    }

    async onAfterExecution() {
        // do something after the code gets generated
        console.log('onAfterExecution()');
        await this.util.execa('git', ['init'], {
            cwd: path.join(
                this.context.destinationPath,
                this.answers.package_name_kebab,
            ),
            stdio: ['inherit', 'inherit', 'inherit'],
        });
    }
};

const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'Gatsby React application';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Project name',
                name: 'project_name',
            },
            {
                message: 'Project code',
                name: 'project_code',
                default: (answers) => {
                    return this.util.textConverter.toKebab(
                        answers.project_name,
                    )
                },
            },
            {
                type: 'confirm',
                name: 'is_microservice',
                message: 'Is this a microservice?',
                default: false,
            },
            {
                name: 'parent_project_code',
                message: 'Parent project code',
                default: path.basename(process.cwd()),
                when: answers => {
                    return answers.is_microservice;
                },
            },
            {
                message: 'Website domain',
                name: 'project_domain',
                default: (answers) => `${answers.project_code}.app`,
            },
            {
                message: 'Path prefix (like for GitHub pages)',
                name: 'path_prefix',
            },
            {
                message: 'Project short name',
                name: 'project_pwa_short_name',
                default: (answers) => {
                    return answers.project_name;
                },
            },
            {
                message: 'Project description',
                name: 'project_description',
                default: (answers) => {
                    return answers.project_name;
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
                default: (answers) => {
                    return answers.project_code;
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
                message: 'Google Analytics ID',
                name: 'ga_id',
                default: 'GA-XXX',
            },
            {
                message: 'Auth0 ID',
                name: 'auth0_id',
            },
            {
                message: 'Enable offline support? (not recommended for frequently updated website)',
                name: 'use_offline',
                type: 'confirm',
                default: false,
            },
            {
                name: 'port',
                message: 'TCP port',
                default: (answers) => {
                    return answers.project_code;
                },
                when: answers => {
                    return answers.is_microservice;
                },
            },
            {
                message: 'DockerHub account name',
                name: 'dockerhub_account_name',
                default: (answers) => {
                    return answers.github_account_name;
                },
                when: answers => {
                    return answers.is_microservice;
                },
            },
        ];
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );
        answers.no_blog = !answers.use_blog;

        const emailParts = answers.author_email.split('@');
        answers.author_email_start = emailParts[0];
        answers.author_email_end = emailParts[1];

        answers.path_prefix = answers.path_prefix ? answers.path_prefix.replace(/^\//, '') : '';

        answers.project_code_global = answers.application_code;
        if (answers.is_microservice) {
            answers.project_code_global = `${answers.parent_project_code}_${answers.project_code}`;
        }

        answers.enable_auth = !!answers.auth0_id;

        return answers;
    }

    async getDependencies(answers) {
        // list your dependencies here
        const { ga_id } = answers;

        return {
            destination: '[project_code_kebab]/',
            packages: [
                '@gannochenko/ui.styled-components',
                '@mdx-js/mdx',
                '@mdx-js/react',
                'animated-scroll-to',
                'babel-plugin-styled-components',
                'color',
                'debounce',
                'events',
                'gatsby',
                'gatsby-image',
                'gatsby-plugin-catch-links',
                !!ga_id && 'gatsby-plugin-google-analytics',
                'gatsby-plugin-manifest',
                'gatsby-plugin-mdx',
                'gatsby-plugin-offline',
                'gatsby-plugin-react-helmet',
                'gatsby-plugin-sharp',
                'gatsby-plugin-sitemap',
                'gatsby-plugin-styled-components',
                'gatsby-remark-images',
                'gatsby-remark-relative-images',
                'gatsby-source-filesystem',
                'gatsby-transformer-remark',
                'gatsby-transformer-sharp',
                'gatsby-plugin-google-fonts',
                'markdown-it',
                'react',
                'react-dom',
                'react-helmet',
                'react-router',
                'sharp',
                'styled-components',
                'throttle-debounce',
                'write',
                '@material-ui/core',
                'gatsby-plugin-material-ui',
                'flat',
            ],
        };
    }

    async getDevDependencies(answers) {
        // list your dev dependencies here
        const { use_blog } = answers;

        return {
            destination: '[project_code_kebab]/',
            packages: [
                '@babel/core',
                '@types/color',
                '@types/debounce',
                '@types/events',
                '@types/markdown-it',
                '@types/mdx-js__react',
                '@types/react-helmet',
                '@types/styled-components@4',
                '@types/throttle-debounce',
                '@types/material-ui',
                '@typescript-eslint/eslint-plugin',
                '@typescript-eslint/parser',
                '@types/flat',
                'eslint',
                'eslint-config-airbnb-base',
                'eslint-config-prettier',
                'eslint-plugin-import',
                'eslint-plugin-jsx-a11y',
                'eslint-plugin-prettier',
                'eslint-plugin-react',
                'eslint-plugin-react-hooks',
                'gatsby-plugin-typescript',
                'gh-pages',
                'husky',
                'prettier',
                'pretty-quick',
                'typescript',
                'typescript-styled-plugin',
                '@gannochenko/gbelt',
                '@generilla/cli',
            ],
        };
    }

    async onAfterExecution() {
        await this.runLinter();
    }

    async runLinter() {
        const { execa, pathExists } = this.util;

        const applicationFolder = path.join(this.context.destinationPath, this.answers.project_code_kebab);
        if (await pathExists(applicationFolder)) {
            await execa('yarn', ['run', 'lint:fix'], {
                cwd: applicationFolder,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }
};

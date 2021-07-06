const path = require('path');

const DEPLOYMENT_NONE = 'none';
const DEPLOYMENT_K8S = 'k8s';
const DEPLOYMENT_GITHUB = 'gh';
const DEPLOYMENT_VERCEL = 'vercel';

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
                message: 'Application name',
                name: 'project_name',
            },
            {
                message: 'Application code',
                name: 'project_code',
                default: (answers) => {
                    return this.util.textConverter.toKebab(
                        answers.project_name,
                    )
                },
            },
            {
                message: 'Website domain',
                name: 'project_domain',
                default: (answers) => `${answers.project_code}.gannochenko.dev`,
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
                default: 'GA-KEY',
            },
            {
                message: 'Auth0 ID',
                name: 'auth0_id',
                // default: 'AUTH0-KEY',
            },
            {
                message: 'Content name',
                name: 'content_name',
                default: 'stuff',
            },
            {
                message: 'Enable offline support? (not recommended for frequently updated website)',
                name: 'use_offline',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Add a contact form?',
                name: 'use_contact_form',
                type: 'confirm',
                default: false,
            },
            {
                type: 'list',
                message: 'Will be deployed to',
                name: 'deployment',
                default: DEPLOYMENT_NONE,
                choices: [
                    { name: 'None', value: DEPLOYMENT_NONE },
                    { name: 'Vercel', value: DEPLOYMENT_VERCEL },
                    { name: 'GitHUB Pages', value: DEPLOYMENT_GITHUB },
                    { name: 'Kubernetes', value: DEPLOYMENT_K8S },
                ],
            },
            {
                name: 'port',
                message: 'TCP port',
                default: 9000,
                when: answers => {
                    return answers.deployment === DEPLOYMENT_K8S;
                },
            },
            {
                message: 'DockerHub account name',
                name: 'dockerhub_account_name',
                default: (answers) => {
                    return answers.github_account_name;
                },
                when: answers => {
                    return answers.deployment === DEPLOYMENT_K8S;
                },
            },
        ];
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );

        answers.content_name_pascal = this.util.textConverter.toPascal(
            answers.content_name,
        );
        answers.content_name_kebab = this.util.textConverter.toKebab(
            answers.content_name,
        );
        answers.content_name_snake_uc = this.util.textConverter.toSnake(
            answers.content_name,
        ).toUpperCase();
        answers.content_name_ucfirst = answers.content_name.substr(0, 1).toUpperCase() + answers.content_name.substr(1);

        const emailParts = answers.author_email.split('@');
        answers.author_email_start = emailParts[0];
        answers.author_email_end = emailParts[1];

        answers.path_prefix = answers.path_prefix ? answers.path_prefix.replace(/^\//, '') : '';

        answers.project_code_global = answers.project_code;
        answers.enable_auth = !!answers.auth0_id;

        answers.dockerhub_account_name = answers.dockerhub_account_name || '';
        answers.port = answers.port || 0;

        answers.deployment = answers.deployment || DEPLOYMENT_K8S;
        answers.need_image = answers.deployment === DEPLOYMENT_K8S;
        answers.need_githubpages = answers.deployment === DEPLOYMENT_GITHUB;
        answers.need_vercel = answers.deployment === DEPLOYMENT_VERCEL;

        return answers;
    }

    async getDependencies(answers) {
        // list your dependencies here
        const { ga_id, auth0_id, use_contact_form } = answers;

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
                !!ga_id && 'gatsby-plugin-gtag',
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
                'react-query',
                'unstated-next',
                'simple-react-lightbox',
                !!auth0_id && '@auth0/auth0-react',
                'material-ui-popup-state',
                !!use_contact_form && '@material-ui/lab',
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
                'dotenv-cli',
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

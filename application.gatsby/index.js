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
        const projectCode = path.basename(path.dirname(process.cwd()));

        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Application name',
                name: 'application_name',
            },
            {
                message: 'Application code',
                name: 'application_code',
                default: (answers) => {
                    return this.util.textConverter.toKebab(
                        answers.application_name,
                    )
                },
            },
            {
                message: 'Website domain',
                name: 'project_domain',
                default: (answers) => `${answers.application_code}.gannochenko.dev`,
            },
            {
                message: 'Path prefix (like for GitHub pages)',
                name: 'path_prefix',
            },
            {
                message: 'Application short name',
                name: 'application_pwa_short_name',
                default: (answers) => {
                    return answers.application_name;
                },
            },
            {
                message: 'Application description',
                name: 'application_description',
                default: (answers) => {
                    return answers.application_name;
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
            {
                message: 'Google Analytics ID',
                name: 'ga_id',
                default: 'GA-KEY',
            },
            {
                message: 'Auth0 ID',
                name: 'auth0_id',
                default: 'AUTH0-KEY',
            },
            {
                message: 'Content name',
                name: 'content_name',
                default: 'blog',
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
        // parent project code
        answers.project_code = path.basename(path.dirname(process.cwd()));
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );

        // here it is possible to alter some answers before the generation starts
        answers.application_code_kebab = this.util.textConverter.toKebab(
            answers.application_code,
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
        const { auth0_id, use_contact_form } = answers;

        return {
            destination: '[application_code_kebab]/',
            packages: [
                '@emotion/react',
                '@emotion/styled',
                '@gannochenko/etc',
                '@gannochenko/ui.emotion',
                '@mdx-js/mdx',
                '@mdx-js/react',
                '@mui/material',
                '@reach/router',
                'animated-scroll-to',
                'axios',
                'babel-plugin-styled-components',
                'color',
                'debounce',
                'events',
                'flat',
                'gatsby',
                'gatsby-plugin-emotion',
                'gatsby-plugin-image',
                'gatsby-plugin-material-ui',
                'gatsby-plugin-nprogress',
                'gatsby-theme-material-ui',
                'i18next',
                'lodash',
                'markdown-it',
                'material-ui-popup-state',
                'notistack',
                'react',
                'react-dom',
                'react-helmet',
                'react-i18next',
                'react-markdown',
                'react-query',
                'react-router',
                'react-yandex-maps',
                'sharp',
                'simple-react-lightbox',
                'throttle-debounce',
                'unstated-next',
                'write',
            ],
        };
    }

    async getDevDependencies(answers) {
        const { ga_id } = answers;

        return {
            destination: '[application_code_kebab]/',
            packages: [
                '@babel/core',
                '@generilla/cli',
                '@types/color',
                '@types/debounce',
                '@types/events',
                '@types/flat',
                '@types/markdown-it',
                '@types/material-ui',
                '@types/mdx-js__react',
                '@types/react-dom',
                '@types/react-helmet',
                '@types/styled-components',
                '@types/throttle-debounce',
                '@typescript-eslint/eslint-plugin',
                '@typescript-eslint/parser',
                'dotenv-cli',
                'eslint',
                'eslint-config-airbnb-base',
                'eslint-config-prettier',
                'eslint-plugin-import',
                'eslint-plugin-jsx-a11y',
                'eslint-plugin-prettier',
                'eslint-plugin-react',
                'eslint-plugin-react-hooks',
                'gatsby-image',
                'gatsby-plugin-catch-links',
                'gatsby-plugin-google-fonts',
                'gatsby-plugin-gtag',
                'gatsby-plugin-manifest',
                'gatsby-plugin-mdx',
                'gatsby-plugin-offline',
                'gatsby-plugin-react-helmet',
                'gatsby-plugin-sharp',
                'gatsby-plugin-sitemap',
                'gatsby-plugin-styled-components',
                'gatsby-plugin-ts',
                'gatsby-plugin-typescript',
                'gatsby-remark-images',
                'gatsby-remark-relative-images-v2',
                'gatsby-source-filesystem',
                'gatsby-transformer-remark',
                'gatsby-transformer-sharp',
                'gh-pages',
                'husky',
                'prettier',
                'pretty-quick',
                'typescript',
                'typescript-styled-plugin',
                !!ga_id && 'gatsby-plugin-gtag',
                'process',
            ],
        };
    }

    async onAfterExecution() {
        await this.runLinter();
    }

    async runLinter() {
        const { execa, pathExists } = this.util;

        const applicationFolder = path.join(this.context.destinationPath, this.answers.application_code_kebab);
        if (await pathExists(applicationFolder)) {
            await execa('yarn', ['run', 'lint:fix'], {
                cwd: applicationFolder,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }
};

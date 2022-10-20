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

        // "@auth0/auth0-react": "^1.8.0",
        //     "@emotion/react": "^11.7.1",
        //     "@emotion/styled": "^11.6.0",
        //     "@gannochenko/etc": "^1.0.7",
        //     "@gannochenko/ui.emotion": "^1.0.0",
        //     "@mdx-js/mdx": "^1.6.22",
        //     "@mdx-js/react": "^1.6.22",
        //     "@mui/material": "^5.2.6",
        //     "@reach/router": "^1.3.4",
        //     "animated-scroll-to": "^2.2.0",
        //     "axios": "^0.24.0",
        //     "babel-plugin-styled-components": "^2.0.2",
        //     "color": "^4.1.0",
        //     "debounce": "^1.2.1",
        //     "events": "^3.3.0",
        //     "flat": "^5.0.2",
        //     "gatsby": "^4.4.0",
        //     "gatsby-plugin-emotion": "^7.4.0",
        //     "gatsby-plugin-image": "^2.4.0",
        //     "gatsby-plugin-material-ui": "^4.1.0",
        //     "gatsby-plugin-nprogress": "^4.4.0",
        //     "gatsby-theme-material-ui": "^5.1.0",
        //     "i18next": "^21.6.11",
        //     "lodash": "^4.17.21",
        //     "markdown-it": "^12.3.0",
        //     "material-ui-popup-state": "^2.0.0",
        //     "notistack": "^2.0.3",
        //     "react": "^17.0.2",
        //     "react-dom": "^17.0.2",
        //     "react-helmet": "^6.1.0",
        //     "react-i18next": "^11.15.4",
        //     "react-markdown": "^7.1.1",
        //     "react-query": "^3.34.5",
        //     "react-router": "^6.2.1",
        //     "react-yandex-maps": "^4.6.0",
        //     "sharp": "^0.29.3",
        //     "simple-react-lightbox": "^3.6.9-0",
        //     "throttle-debounce": "^3.0.1",
        //     "unstated-next": "^1.1.0",
        //     "write": "^2.0.0"

        return {
            destination: '[application_code_kebab]/',
            packages: [
                '@gannochenko/ui.emotion',
                '@gannochenko/ui',
                '@mdx-js/mdx',
                '@mdx-js/react',
                'animated-scroll-to',
                'color',
                'debounce',
                'events',
                'gatsby',
                'markdown-it',
                'react',
                'react-dom',
                'react-helmet',
                'react-router',
                'sharp',
                'throttle-debounce',
                'write',
                '@mui/material',
                '@emotion/styled',
                'gatsby-plugin-material-ui',
                'flat',
                'react-query',
                'unstated-next',
                'simple-react-lightbox',
                !!auth0_id && '@auth0/auth0-react',
                'material-ui-popup-state',
                !!use_contact_form && '@material-ui/lab',
                'gatsby-plugin-nprogress',
                'gatsby-plugin-image',
                '@reach/router',
                'notistack',
                'i18next',
                'react-i18next',
            ],
        };
    }

    async getDevDependencies(answers) {
        const { ga_id } = answers;

        // "@babel/core": "^7.16.5",
        //     "@gannochenko/gbelt": "^1.0.13",
        //     "@generilla/cli": "^2.0.5",
        //     "@types/color": "^3.0.2",
        //     "@types/debounce": "^1.2.1",
        //     "@types/events": "^3.0.0",
        //     "@types/flat": "^5.0.2",
        //     "@types/markdown-it": "^12.2.3",
        //     "@types/material-ui": "^0.21.12",
        //     "@types/mdx-js__react": "^1.5.5",
        //     "@types/react-dom": "^17.0.11",
        //     "@types/react-helmet": "^6.1.4",
        //     "@types/styled-components": "^5.1.18",
        //     "@types/throttle-debounce": "^2.1.0",
        //     "@typescript-eslint/eslint-plugin": "^5.8.0",
        //     "@typescript-eslint/parser": "^5.8.0",
        //     "dotenv-cli": "^4.1.1",
        //     "eslint": "^8.5.0",
        //     "eslint-config-airbnb-base": "^15.0.0",
        //     "eslint-config-prettier": "^8.3.0",
        //     "eslint-plugin-import": "^2.25.3",
        //     "eslint-plugin-jsx-a11y": "^6.5.1",
        //     "eslint-plugin-prettier": "^4.0.0",
        //     "eslint-plugin-react": "^7.27.1",
        //     "eslint-plugin-react-hooks": "^4.3.0",
        //     "gatsby-image": "^3.11.0",
        //     "gatsby-plugin-catch-links": "^4.4.0",
        //     "gatsby-plugin-google-fonts": "^1.0.1",
        //     "gatsby-plugin-gtag": "^1.0.13",
        //     "gatsby-plugin-manifest": "^4.4.0",
        //     "gatsby-plugin-mdx": "^3.4.0",
        //     "gatsby-plugin-offline": "^5.4.0",
        //     "gatsby-plugin-react-helmet": "^5.4.0",
        //     "gatsby-plugin-sharp": "^4.4.0",
        //     "gatsby-plugin-sitemap": "^5.4.0",
        //     "gatsby-plugin-styled-components": "^5.4.0",
        //     "gatsby-plugin-ts": "^3.1.0",
        //     "gatsby-plugin-typescript": "^4.4.0",
        //     "gatsby-remark-images": "^6.4.0",
        //     "gatsby-remark-relative-images": "^2.0.2",
        //     "gatsby-source-filesystem": "^4.4.0",
        //     "gatsby-transformer-remark": "^5.4.0",
        //     "gatsby-transformer-sharp": "^4.4.0",
        //     "gh-pages": "^3.2.3",
        //     "husky": "^7.0.4",
        //     "prettier": "^2.5.1",
        //     "pretty-quick": "^3.1.2",
        //     "typescript": "^4.5.4",
        //     "typescript-styled-plugin": "^0.18.2"

        return {
            destination: '[application_code_kebab]/',
            packages: [
                '@babel/core',
                '@types/color',
                '@types/debounce',
                '@types/events',
                '@types/markdown-it',
                '@types/mdx-js__react',
                '@types/react-helmet',
                '@types/styled-components',
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
                'gatsby-plugin-ts',
                'gh-pages',
                'husky',
                'prettier',
                'pretty-quick',
                'typescript',
                'typescript-styled-plugin',
                '@gannochenko/gbelt',
                '@generilla/cli',
                'dotenv-cli',
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

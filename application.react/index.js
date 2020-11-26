const path = require('path');
const process = require('process');
const fs = require('fs');
const yaml = require('js-yaml');

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    setContext(context) {
        this.context = context;
    }

    getName() {
        return '[DEPRECATED] Vanilla React application (React, TypeScript, MobX)';
    }

    getQuestions() {
        return [
            {
                type: 'input',
                name: 'application_code',
                message: 'Application code',
                validate: async (value) => {
                    if (typeof value !== 'string') {
                        return 'Must be a string';
                    }

                    if (!value.match(/^[a-zA-Z0-9-_\.]+$/)) {
                        return 'Must contain only letters, digits, _, - and . signs';
                    }

                    const dst = path.join(process.cwd(), value);
                    if (await this.util.pathExists(dst)) {
                        return `Folder exists: ${dst}`;
                    }

                    return true;
                },
            },
            {
                type: 'input',
                name: 'application_name',
                message: 'Application name',
            },
            {
                type: 'input',
                name: 'port',
                message: 'Port number',
                default: 3000,
                validate: async (value) => {
                    if (typeof value !== 'string') {
                        return true; // the default value will be used
                    }

                    value = parseInt(value, 10);
                    if (isNaN(value) || value < 0 || value > 65535) {
                        return `Must be a number between 0 and 65535`;
                    }

                    return true;
                },
            },
            {
                type: 'input',
                name: 'api_port',
                message: 'API port number',
                default: 4000,
                when: answers => {
                    return answers.use_rest;
                },
                validate: async (value) => {
                    if (typeof value !== 'string') {
                        return true; // the default value will be used
                    }

                    value = parseInt(value, 10);
                    if (isNaN(value) || value < 0 || value > 65535) {
                        return `Must be a number between 0 and 65535`;
                    }

                    return true;
                },
            },
            {
                type: 'input',
                name: 'vendor_name',
                message: 'Vendor name (to publish at the DockerHub, etc.)',
            },
            {
                type: 'confirm',
                name: 'is_monorepo',
                message: 'Are we inside a monorepo?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_rest',
                message: 'Do we have REST?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_graphql',
                message: 'Do we have GraphQL?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_ghpages',
                message: 'Do we use GitHUB pages?',
                default: false,
            },
            {
                type: 'input',
                name: 'domain_name',
                message: 'What will be the domain name?',
                default: false,
            },
            // {
            //     // https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/
            //     type: 'confirm',
            //     name: 'use_materialui',
            //     message: 'Would you like to use MaterialUI in the project?',
            //     default: false,
            // },
        ];
    }

    refineAnswers(answers) {
        answers.port = answers.port || 3000;
        answers.api_port = answers.api_port || 4000;
        answers.port_hmr = parseInt(answers.port, 10) + 1;
        answers.port_bundle_analyzer = parseInt(answers.port, 10) + 10;
        answers.application_folder = answers.is_monorepo ? `app.${answers.application_code}` : answers.application_code;
        answers.application_code_global = answers.application_code;
        answers.application_code_global_kebab = `app-${this.util.textConverter.toKebab(answers.application_code)}`;
        if (answers.is_monorepo) {
            answers.application_code_global = `${path.basename(process.cwd())}_${answers.application_code}`;
        }

        answers.use_materialui = true;

        this.answers = answers;

        return answers;
    }

    getDependencies(answers) {
        const { use_graphql, use_rest, use_materialui } = answers;

        return {
            destination: '[application_folder]/',
            packages: [
                // babel
                '@babel/polyfill',

                // express (server-side)
                'express',
                'body-parser',
                'cors',
                'helmet',

                // aux
                'debug',
                '@gannochenko/etc',
                '@gannochenko/ui',

                // front
                'react',
                'react-dom',
                'mobx',
                'mobx-react',
                'react-router',
                'react-router-dom',
                'history',
                'throttle-debounce',
                'clone-deep',
                'react-helmet',

                // styles
                'styled-components',

                // UI kit
                use_materialui && '@material-ui/core',
                use_materialui && '@material-ui/icons',
                use_materialui && 'jss',
                use_materialui && 'classnames',

                // graphql
                use_graphql && 'graphql',
                use_graphql && 'graphql-tag',

                // networking
                use_graphql && 'apollo-client',
                use_graphql && 'apollo-cache-inmemory',
                use_graphql && 'apollo-link-http',
                use_graphql && 'apollo-link',
                use_graphql && 'apollo-link-error',
                use_rest && 'axios',

                // metrics
                'prom-client',
                'response-time',

                // other
                // 'moment',
                'prop-types', // required now, should be removed later
            ],
        };
    }

    getDevDependencies(answers) {
        const { use_graphql, use_rest, use_ghpages } = answers;

        return {
            destination: '[application_folder]/',
            packages: [
                // babel
                '@babel/core',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-decorators',
                '@babel/plugin-transform-runtime',
                '@babel/preset-env',
                '@babel/preset-react',
                'babel-eslint',
                'babel-loader',
                'babel-plugin-styled-components',
                'babel-polyfill',

                // lint
                'eslint',
                'eslint-config-airbnb-base',
                'eslint-config-prettier',
                'eslint-plugin-import',
                'eslint-plugin-prettier',
                'eslint-plugin-react',
                'eslint-plugin-jsx-a11y',
                'eslint-plugin-react-hooks',
                'eslint-loader',

                // dev cycle
                'npm-run-all',
                'webpack-bundle-analyzer',
                'leasot',
                'serve',

                // codestyle
                'husky',
                'prettier',
                'pretty-quick',

                // webpack
                'start-server-webpack-plugin',
                'url-loader',
                'file-loader',
                'raw-loader',
                'webpack',
                'webpack-cli',
                'webpack-node-externals',
                'webpack-dev-server',
                'copy-webpack-plugin',
                'html-webpack-plugin',
                'html-webpack-injector',
                'dotenv-webpack',
                'image-webpack-loader',
                'html-loader',
                'favicons-webpack-plugin',
                'terser-webpack-plugin',
                'webpack-bundle-size-analyzer',
                'webpack-bundle-analyzer',

                // testing
                'jest',
                '@testing-library/react',
                '@testing-library/dom',
                '@testing-library/jest-dom',
                '@testing-library/user-event',
                'jest-dom',
                'redux-mock-store',

                // hmr
                'react-hot-loader',

                // typescript
                'fork-ts-checker-webpack-plugin-alt',
                'react-dev-utils',
                'typescript',
                'ts-essentials',
                'utility-types',
                '@babel/preset-typescript',
                '@typescript-eslint/eslint-plugin',
                '@typescript-eslint/parser',
                '@types/throttle-debounce',
                '@types/react-helmet',

                // types
                '@types/styled-components',
                '@types/react-router-dom',
                '@types/react-router',
                '@types/history',
                '@types/express',
                '@types/jest',
                '@types/clone-deep',

                // deploy
                use_ghpages && 'gh-pages',
            ],
        };
    }

    async onAfterExecution() {
        await this.addToComposition();
        await this.addToInfra();
        await this.makeScriptsExecutable();
        await this.runLinter();
    }

    async addToComposition() {
        const { pathExists, ejs } = this.util;
        if (this.answers.is_monorepo) {
            const cDevPath = path.join(process.cwd(), 'infra', 'development.yml');
            if (!await pathExists(cDevPath)) {
                return;
            }

            const devPart = path.join(this.context.generatorPath, 'template.composition.yml');
            if (!await pathExists(devPart)) {
                return;
            }

            const part = await new Promise((resolve, reject) => {
                ejs.renderFile(devPart, this.answers, {}, (err, str) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(str);
                    }
                });
            });

            let ymlPart = yaml.safeLoad(part);

            // some hard-coded fixes
            ymlPart.depends_on = ymlPart.depends_on || [];

            const ymlWhole = yaml.safeLoad(fs.readFileSync(cDevPath, 'utf8'));
            ymlWhole.services = ymlWhole.services || {};
            ymlWhole.services[this.answers.application_code] = ymlPart;

            fs.writeFileSync(cDevPath, yaml.safeDump(ymlWhole));
        }
    }

    async makeScriptsExecutable() {
        const { execa, pathExists } = this.util;

        const scriptsPath = path.join(this.context.destinationPath, this.answers.application_folder, 'script');
        if (await pathExists(scriptsPath)) {
            await execa('chmod', ['-R', '+x', scriptsPath], {
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }

    async addToInfra() {
        if (!this.answers.is_monorepo) {
            return;
        }

        const { pathExists } = this.util;

        const terraformPath = path.join(process.cwd(), 'infra', 'terraform');
        const templatePath = path.join(this.context.generatorPath, 'template.k8s');

        // update ingress
        const ingressPath = path.join(terraformPath, 'ingress.tf');
        if (await pathExists(ingressPath)) {
            const ingressRulesPath = path.join(templatePath, 'ingress.rules.tf');
            await this.replaceFilePlaceholders(ingressPath, {
                'RULES': `${await this.renderFile(ingressRulesPath)}\n    /* PH:RULES */`
            });
        }

        // update locals
        const localsPath = path.join(terraformPath, 'locals.app.tf');
        if (await pathExists(localsPath)) {
            const localsAppPath = path.join(templatePath, 'locals.app.tf');
            await this.replaceFilePlaceholders(localsPath, {
                'LOCALS': `${await this.renderFile(localsAppPath)}\n/* PH:LOCALS */`,
                'HOSTS': `local.${this.answers.application_code_global_kebab}-host, /* PH:HOSTS */`
            });
        }

        // add a module
        const modulesPath = path.join(terraformPath, 'modules.tf');
        if (await pathExists(modulesPath)) {
            const modulePath = path.join(templatePath, 'module.tf');
            await this.replaceFilePlaceholders(modulesPath, {
                'MODULES': `${await this.renderFile(modulePath)}\n/* PH:MODULES */`,
            });
        }
    }

    async runLinter() {
        const { execa, pathExists } = this.util;

        const applicationFolder = path.join(this.context.destinationPath, this.answers.application_folder);
        if (await pathExists(applicationFolder)) {
            await execa('yarn', ['run', 'lint:fix'], {
                cwd: applicationFolder,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }

    async replaceFilePlaceholders(filePath, replacements = {}) {
        let contents = fs.readFileSync(filePath).toString('utf8');

        Object.keys(replacements).forEach(placeholder => {
            const replacement = replacements[placeholder];
            const placeholderFull = `/\\*\\s+PH:${placeholder}\\s+\\*/`;

            contents = contents.replace(new RegExp(placeholderFull, 'g'), replacement);
        });

        fs.writeFileSync(filePath, contents);
    }

    async renderFile(filePath) {
        const { ejs } = this.util;
        return new Promise((resolve, reject) => {
            ejs.renderFile(filePath, this.answers, {}, (err, str) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(str);
                }
            });
        });
    }
};

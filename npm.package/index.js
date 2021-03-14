const path = require('path');

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'NPM package';
    }

    getQuestions() {
        return [
            {
                message: 'NPM package name',
                name: 'package_name',
            },
            {
                message: 'NPM company name (optional)',
                name: 'company_name',
                default: '',
            },
            {
                message: 'Project name',
                name: 'application_name',
            },
            {
                message: 'Author\'s full name',
                name: 'author_full_name',
            },
            {
                message: 'Author\'s account code on GitHub',
                name: 'github_author_code',
            },
            {
                message: 'Author\'s account code on LinkedIn',
                name: 'linkedin_author_code',
            },
            {
                message: 'Is this a CLI application?',
                name: 'is_cli',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Command name',
                name: 'command_name',
                when: (answers) => {
                    return !!answers.is_cli;
                },
            },
            {
                message: 'Are we inside of a monorepo?',
                name: 'is_monorepo',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Would you like to add CLI application boilerplate?',
                name: 'use_cli_boilerplate',
                type: 'confirm',
                default: true,
                when: (answers) => {
                    return !!answers.is_cli;
                },
            },
            {
                message: 'Is this a UI library?',
                name: 'is_ui',
                type: 'confirm',
                default: false,
                when: (answers) => {
                    return !answers.is_cli;
                },
            },
            {
                message: 'Would you like to add UI library boilerplate?',
                name: 'use_ui_boilerplate',
                type: 'confirm',
                default: true,
                when: (answers) => {
                    return !!answers.is_ui;
                },
            },
        ];
    }

    refineAnswers(answers) {
        answers.package_name_full = answers.package_name;
        if (answers.company_name) {
            answers.package_name_full = `@${answers.company_name}/${answers.package_name}`;
        }

        answers.use_cli_boilerplate = !!answers.use_cli_boilerplate;
        answers.application_name = answers.application_name || '';
        answers.is_ui = !!answers.is_ui;

        answers.is_not_monorepo = !answers.is_monorepo;

        answers.use_ui_boilerplate = !!answers.use_ui_boilerplate;

        if (process.env.DEBUG) {
            console.log(answers);
        }

        return answers;
    }

    getDependencies() {
        const { use_cli_boilerplate, is_ui } = this.answers;

        return {
            destination: '[package_name]/',
            packages: [
                !!use_cli_boilerplate && 'commander',
                !!use_cli_boilerplate && 'execa',
                !!use_cli_boilerplate && 'chalk',
                !!use_cli_boilerplate && 'fs-extra',
                !!use_cli_boilerplate && 'clear',
                !!use_cli_boilerplate && 'figlet',
                !!use_cli_boilerplate && 'inquirer',
                !!use_cli_boilerplate && 'find-up-all',
                !is_ui && 'debug',
            ],
        };
    }

    getDevDependencies() {
        const { is_cli, use_cli_boilerplate, is_ui, is_not_monorepo } = this.answers;

        return {
            destination: '[package_name]/',
            packages: [
                '@team-griffin/install-self-peers',
                'jest',
                'jest-chain',
                'ts-jest',
                'typescript',
                '@types/jest',
                'eslint',
                '@typescript-eslint/parser',
                'eslint-config-airbnb-base',
                'eslint-config-prettier',
                'eslint-plugin-import',
                '@typescript-eslint/eslint-plugin',
                'eslint-plugin-prettier',
                'ts-essentials',
                'semantic-release',
                '@semantic-release/commit-analyzer',
                '@semantic-release/release-notes-generator',
                '@semantic-release/npm',
                '@semantic-release/changelog',
                '@semantic-release/git',

                !!is_not_monorepo && 'husky',
                !!is_not_monorepo && 'prettier',
                !!is_not_monorepo && 'pretty-quick',

                !!is_cli && 'ts-node',

                !!use_cli_boilerplate && '@types/fs-extra',
                !!use_cli_boilerplate && '@types/figlet',
                !!use_cli_boilerplate && '@types/clear',
                !!use_cli_boilerplate && '@types/inquirer',

                !!is_ui && '@types/react-dom',
                !!is_ui && '@types/styled-components',
                !!is_ui && '@testing-library/react',
                !!is_ui && '@testing-library/react-hooks',
                !!is_ui && '@testing-library/dom',
                !!is_ui && '@testing-library/user-event',
                !!is_ui && '@testing-library/jest-dom',
                !!is_ui && 'eslint-plugin-jsx-a11y',
                !!is_ui && 'eslint-plugin-react',
                !!is_ui && 'eslint-plugin-react-hooks',
                !!is_ui && 'jest-styled-components',
                !!is_ui && 'react-test-renderer',

                !is_ui && '@types/debug',
                '@gannochenko/gbelt',
                'del-cli',
            ],
        };
    }

    async onAfterExecution() {
        // todo:
        const { execa, pathExists } = this.util;

        const rootPath = path.join(this.context.destinationPath, this.answers.package_name);
        if (await pathExists(rootPath)) {
            await execa('yarn', ['install-peers'], {
                cwd: rootPath,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }

        const docPath = path.join(rootPath, 'doc');
        if (await pathExists(docPath)) {
            await execa('yarn', [], {
                cwd: docPath,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }

        const devPath = path.join(rootPath, 'dev');
        if (await pathExists(devPath)) {
            await execa('yarn', [], {
                cwd: devPath,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }

        const scriptsPath = path.join(rootPath, 'script');
        if (await pathExists(scriptsPath)) {
            await execa('chmod', ['-R', '+x', scriptsPath], {
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }
};

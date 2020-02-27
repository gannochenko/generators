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
                message: 'Application name',
                name: 'application_name',
                when: (answers) => {
                    return !!answers.is_cli;
                },
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

        return answers;
    }

    getDependencies() {
        const { use_cli_boilerplate } = this.answers;

        return {
            destination: '[package_name]/',
            packages: [
                !!use_cli_boilerplate && 'commander',
                !!use_cli_boilerplate && 'inquirer',
                !!use_cli_boilerplate && 'execa',
                !!use_cli_boilerplate && 'chalk',
                !!use_cli_boilerplate && 'fs-extra',
                !!use_cli_boilerplate && 'clear',
                !!use_cli_boilerplate && 'figlet',
            ],
        };
    }

    getDevDependencies() {
        const { company_name, is_cli, use_cli_boilerplate, is_ui } = this.answers;

        return {
            destination: '[package_name]/',
            packages: [
                '@team-griffin/install-self-peers',
                'jest',
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

                !company_name && 'husky',
                !company_name && 'prettier',
                !company_name && 'pretty-quick',

                !!is_cli && 'ts-node',

                !!use_cli_boilerplate && '@types/inquirer',
                !!use_cli_boilerplate && '@types/fs-extra',

                !!is_ui && '@types/react-dom',
                !!is_ui && '@testing-library/react',
                !!is_ui && '@testing-library/user-event',
                !!is_ui && '@testing-library/jest-dom',
                !!is_ui && 'eslint-plugin-jsx-a11y',
                !!is_ui && 'eslint-plugin-react',
                !!is_ui && 'eslint-plugin-react-hooks',
            ],
        };
    }
};

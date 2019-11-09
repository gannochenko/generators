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
                message: 'What is the NPM package name?',
                name: 'package_name',
            },
            {
                message: 'What is the NPM company name? (optional)',
                name: 'company_name',
                default: '',
            },
            {
                message: 'Is this a CLI application?',
                name: 'cli',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Command name',
                name: 'command_name',
                when: (answers) => {
                    return !!answers.cli;
                },
            },
        ];
    }

    refineAnswers(answers) {
        answers.package_name_full = answers.package_name;
        if (answers.company_name) {
            answers.package_name_full = `@${answers.company_name}/${answers.package_name}`;
        }

        return answers;
    }

    getDevDependencies() {
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
                'eslint-plugin-prettier'
            ],
        };
    }
};

const path = require('path');

const DEPLOYMENT_NONE = 'none';
const DEPLOYMENT_K8S = 'k8s';

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Cli application';
    }

    getQuestions() {
        const projectCode = path.basename(path.dirname(process.cwd()));

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
                type: 'list',
                message: 'Will be deployed to',
                name: 'deployment',
                default: DEPLOYMENT_NONE,
                choices: [
                    { name: 'None', value: DEPLOYMENT_NONE },
                    { name: 'Kubernetes', value: DEPLOYMENT_K8S },
                ],
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
            {
                message: 'Command name',
                name: 'command_name',
                when: (answers) => {
                    return !!answers.is_cli;
                },
            },
        ];
    }

    refineAnswers(answers) {
        // parent project code
        answers.project_code = path.basename(path.dirname(process.cwd()));
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );

        // here it is possible to alter some answers before the generation starts
        answers.application_code_kebab = this.util.textConverter.toKebab(
            answers.application_code,
        );

        answers.deployment = answers.deployment || DEPLOYMENT_K8S;
        answers.need_image = answers.deployment === DEPLOYMENT_K8S;

        if (process.env.DEBUG) {
            console.log(answers);
        }

        return answers;
    }

    getDependencies() {
        return {
            destination: '[application_code_kebab]/',
            packages: [
                'commander',
                'execa',
                'chalk',
                'fs-extra',
                'clear',
                'figlet',
                'inquirer',
                'find-up-all',
                'debug',
            ],
        };
    }

    getDevDependencies() {
        return {
            destination: '[application_code_kebab]/',
            packages: [
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
                'husky',
                'prettier',
                'pretty-quick',
                'ts-node',
                'pkg',
                '@types/node',
                '@types/fs-extra',
                '@types/figlet',
                '@types/clear',
                '@types/inquirer',
                '@types/debug',
                '@gannochenko/gbelt',
                'del-cli',
            ],
        };
    }

    async onAfterExecution() {
        const { execa, pathExists } = this.util;

        const scriptsPath = path.join(rootPath, 'script');
        if (await pathExists(scriptsPath)) {
            await execa('chmod', ['-R', '+x', scriptsPath], {
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }
};

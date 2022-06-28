const path = require('path');
const process = require('process');

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Project';
    }

    getQuestions() {
        return [
            {
                name: 'project_code',
                message: 'Project code',
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
                name: 'project_name',
                message: 'Project name',
            },
            {
                name: 'domain',
                message: 'Public domain (i.e. "my-cool-website.com")',
                // validate: async () => {
                //     // todo
                //
                //     return true;
                // },
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
            // {
            //     type: 'confirm',
            //     name: 'use_postgres',
            //     message: 'Do we have Postgres?',
            //     default: false,
            // },
            // {
            //     type: 'input',
            //     name: 'postgres_database_name',
            //     message: 'Postgres database name',
            //     when: answers => {
            //         return answers.use_postgres;
            //     },
            //     validate: async (value) => {
            //         if (!value.match(/^[a-z0-9_]+$/)) {
            //             return 'Must contain only letters, digits and _ sign';
            //         }
            //
            //         return true;
            //     },
            // },
            // {
            //     type: 'confirm',
            //     name: 'use_cache',
            //     message: 'Do we have Redis as cache?',
            //     default: false,
            // },
            // {
            //     type: 'confirm',
            //     name: 'use_nats',
            //     message: 'Do we have NATS streaming?',
            //     default: false,
            // },
        ];
    }

    refineAnswers(answers) {
        answers.project_code_kebab = this.util.textConverter.toKebab(answers.project_code);

        return answers;
    }

    getDevDependencies(answers) {
        return {
            destination: '[project_code]/',
            packages: [
            ],
        };
    }

    async onAfterExecution() {
        await this.initGit();
    }

    async initGit() {
        const { execa, pathExists } = this.util;
        const { github_account_name, github_repository_name, project_code } = this.answers;

        const projectFolder = path.join(this.context.destinationPath, project_code);
        if (await pathExists(projectFolder)) {
            await execa('git', ['init'], {
                cwd: projectFolder,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
            await execa('git', ['checkout', '-b', 'dev'], {
                cwd: projectFolder,
                stdio: ['inherit', 'inherit', 'inherit'],
            });
            if (github_account_name.length && github_repository_name.length) {
                const repoName = `git@github.com:${github_account_name}/${github_repository_name}.git`;
                await execa('git', ['remote', 'add', 'origin', repoName], {
                    cwd: projectFolder,
                    stdio: ['inherit', 'inherit', 'inherit'],
                });
            }
        }
    }
};

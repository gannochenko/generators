const path = require('path');
const process = require('process');

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Root folder for a monorepo-based project';
    }

    setContext(context) {
        this.context = context;
    }

    getQuestions() {
        return [
            {
                type: 'input',
                name: 'composition_code',
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
                type: 'input',
                name: 'composition_name',
                message: 'Project name',
            },
            {
                type: 'input',
                name: 'domain',
                message: 'Public domain (i.e. "my-cool-website.com")',
                validate: async () => {
                    // todo

                    return true;
                },
            },
            {
                type: 'confirm',
                name: 'use_postgres',
                message: 'Do we have Postgres?',
                default: false,
            },
            {
                type: 'input',
                name: 'database_name',
                message: 'Database name',
                when: answers => {
                    return answers.use_postgres;
                },
                validate: async (value) => {
                    if (!value.match(/^[a-z0-9_]+$/)) {
                        return 'Must contain only letters, digits and _ sign';
                    }

                    return true;
                },
            },
            {
                type: 'confirm',
                name: 'use_cache',
                message: 'Do we have Redis as cache?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_broker',
                message: 'Do we have Redis as a message broker?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_k8s',
                message: 'Do we have K8S?',
                default: false,
            },
        ];
    }

    refineAnswers(answers) {
        answers.composition_code_kebab = this.util.textConverter.toKebab(answers.composition_code);

        this.answers = answers;

        return answers;
    }

    getDevDependencies(answers) {
        const { use_graphql, use_grpc } = answers;

        return {
            destination: '[composition_code]/',
            packages: [
                'concurrently',
                'js-yaml',
            ],
        };
    }

    async onAfterExecution() {
        await this.makeScriptsExecutable();
    }

    async makeScriptsExecutable() {
        const { execa, pathExists } = this.util;

        const scriptsPath = path.join(this.context.destinationPath, this.answers.composition_code, 'script');
        if (await pathExists(scriptsPath)) {
            await execa('chmod', ['-R', '+x', scriptsPath], {
                stdio: ['inherit', 'inherit', 'inherit'],
            });
        }
    }
};

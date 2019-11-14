module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Microservice composition';
    }

    getQuestions() {
        return [
            {
                type: 'input',
                name: 'composition_code',
                message: 'Composition code',
                validate: async (value) => {
                    if (typeof value !== 'string') {
                        return 'Must be a string';
                    }

                    if (!value.match(/^[a-zA-Z0-9-_\.]+$/)) {
                        return 'Must contain only letters, digits, _, - and . signs';
                    }

                    // const dst = path.join(process.cwd(), value);
                    // if (await this.util.pathExists(dst)) {
                    //     return `Folder exists: ${dst}`;
                    // }

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
        ];
    }
};

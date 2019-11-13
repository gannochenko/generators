//const pathExists = require('path-exists');

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Development machine';
    }

    getQuestions() {
        return [
            {
                type: 'input',
                name: 'machine_name',
                message: 'Machine name',
                validate: async (value) => {
                    if (typeof value !== "string") {
                        return 'Must be a string';
                    }

                    if (!value.match(/^[a-zA-Z0-9-_\.]+$/)) {
                        return 'Must contain only letters, digits, _ and - signs';
                    }

                    const dst = path.join(process.cwd(), value);
                    if (await this.util.pathExists(dst)) {
                        return `Folder exists: ${dst}`;
                    }

                    return true;
                }
            },
            {
                type: 'confirm',
                name: 'add_project_folder',
                message: 'Add /Users/%username%/proj/ as a shared folder?',
                default: false,
            },
            {
                type: 'input',
                name: 'user_name',
                message: 'Currently authorized user name',
                validate: async (value) => {
                    if (typeof value !== "string") {
                        return 'Must be a string';
                    }

                    if (!value.match(/^[a-zA-Z0-9-_\.]+$/)) {
                        return 'Must contain only letters, digits, _ and - signs';
                    }

                    return true;
                },
                when: answers => {
                    return answers.add_project_folder;
                },
            },
        ];
    }
};

//const pathExists = require('path-exists');
const process = require('process');
const path = require('path');

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'VirtualBox machine for development';
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
                name: 'use_syncfolder',
                message: 'Add /Users/%username%/sync/ as a shared folder?',
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
                    return answers.use_syncfolder;
                },
            },
            {
                type: 'confirm',
                name: 'use_python',
                message: 'Add Python3?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_aws',
                message: 'Add AWS CLI?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_node',
                message: 'Add Node?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_reacttools',
                message: 'Add React tools (such as create-react-app)?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_gatsby',
                message: 'Add Gatsby?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_ruby',
                message: 'Add Ruby?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_heroku',
                message: 'Add Heroku?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_mongodb',
                message: 'Add MongoDB?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_docker',
                message: 'Add Docker?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'use_terraform',
                message: 'Add Terraform?',
                default: false,
            },
        ];
    }

    refineAnswers(answers) {
        if (answers.use_aws) {
            answers.use_python = true;
        }

        return answers;
    }
};

const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'Create React App application with custom setup';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'What is the package name?',
                name: 'package_name',
            },
            {
                type: 'confirm',
                name: 'use_react',
                message: 'Do you need React?',
                default: false,
            },
        ];
    }

    async exec(cmd, args, cwd) {
        await this.util.execa(cmd, args, {
            cwd,
            stdio: ['inherit', 'inherit', 'inherit'],
        });
    }

    async cleanupFiles() {
        await this.exec(
            'yarn',
            ['create', 'react-app', '--template=typescript', this.answers.package_name_kebab],
            this.context.destinationPath
        );

        await this.exec(
            'rm',
            ['App.css', 'App.test.tsx', 'App.tsx', 'index.css', 'index.tsx', 'logo.svg'],
            path.join(this.applicationFolder, 'src')
        );

        await this.exec(
            'rm',
            ['README.md'],
            this.applicationFolder
        );

        await this.exec(
            'mv',
            ['src', '_src'],
            this.applicationFolder
        );
    }

    async refineAnswers(answers) {
        // here it is possible to alter some answers before the generation starts
        answers.package_name_kebab = this.util.textConverter.toKebab(
            answers.package_name,
        );

        this.applicationFolder = path.join(this.context.destinationPath, this.answers.package_name_kebab);

        await this.cleanupFiles();

        return answers;
    }

    async getDependencies(answers) {
        // list your dependencies here
        const { use_react } = answers;

        return {
            destination: '[package_name_kebab]/',
            packages: [
                'animated-scroll-to',
                'styled-components',
            ],
        };
    }

    async getDevDependencies(answers) {
        // list your dev dependencies here
        const { use_react } = answers;

        return {
            destination: '[package_name_kebab]/',
            packages: [
                'prettier',
                'husky',
                'pretty-quick',
                '@types/styled-components',
                'serve',
            ],
        };
    }

    async onAfterExecution() {
        await this.exec(
            'cp',
            ['_src/*', 'src/'],
            this.applicationFolder
        );

        await this.exec(
            'rm',
            ['-rf', '_src'],
            this.applicationFolder
        );
    }
};

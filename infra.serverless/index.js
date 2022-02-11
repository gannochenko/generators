const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'Infra for the serverless application';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'Application code',
                name: 'application_code',
            },
            {
                message: 'Lambda function name',
                name: 'function_name',
            },
            {
                message: 'Lambda function path part',
                name: 'path_part',
                when: (answers) => !!answers.function_name,
                default: (answers) => answers.function_name,
            },
            {
                message: 'Add contact form Lambda?',
                name: 'use_contact_form',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Add API Lambda?',
                name: 'use_api',
                type: 'confirm',
                default: false,
            },
            {
                message: 'Entity name',
                name: 'entity_name',
                when: (answers) => answers.use_api,
            },
            {
                message: 'API path prefix',
                name: 'api_path_prefix',
                when: (answers) => answers.use_api,
                default: 'api',
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
                    return answers.application_code;
                },
            },
        ];
    }

    async refineAnswers(answers) {
        // parent project code
        answers.project_code = path.basename(path.dirname(process.cwd()));
        answers.project_code_kebab = this.util.textConverter.toKebab(
            answers.project_code,
        );

        // here it is possible to alter some answers before the generation starts
        answers.application_code_kebab = this.util.textConverter.toKebab(
            answers.application_code,
        );
        answers.application_code_tf = answers.application_code_kebab.replace(/[^a-zA-Z0-9_]/g, '-');
        answers.use_function = !!answers.function_name;
        answers.function_name = answers.function_name ?? '';
        answers.function_name_kebab = this.util.textConverter.toKebab(answers.function_name);
        answers.function_name_tf = answers.function_name_kebab.replace(/[^a-zA-Z0-9_]/g, '-');
        answers.gateway_resource_name = answers.path_part.replace(/[^a-zA-Z0-9_]/g, '-');

        answers.entity_name = answers.entity_name ?? '';
        answers.entity_name_camel = this.util.textConverter.toPascal(
            answers.entity_name,
        );
        answers.entity_name_camel_uc = answers.entity_name_camel.toUpperCase();
        answers.entity_name_kebab = this.util.textConverter.toKebab(
            answers.entity_name,
        );
        answers.entity_name_snake = this.util.textConverter.toSnake(
            answers.entity_name,
        );
        answers.entity_name_tf = answers.entity_name_snake.replace(/[^a-zA-Z0-9_]/g, '-');

        answers.api_path_prefix = answers.api_path_prefix ?? '';

        return answers;
    }
};

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
                message: 'API path part',
                name: 'path_part',
                when: (answers) => !!answers.function_name,
                default: (answers) => answers.function_name,
            },
            {
                message: 'Add DynamoDB?',
                name: 'use_dynamodb',
                type: 'confirm',
                default: false,
            },
            {
                message: 'DynamoDB table name',
                name: 'dynamodb_table_name',
                default: 'users',
                when: ({ use_dynamodb }) => !!use_dynamodb,
            },
            {
                message: 'Add contact form Lambda?',
                name: 'use_contact_form',
                type: 'confirm',
                default: false,
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
        answers.use_dynamodb = !!answers.use_dynamodb;
        answers.gateway_resource_name = answers.path_part.replace(/[^a-zA-Z0-9_]/g, '-');
        answers.dynamodb_table_name_tf = this.util.textConverter.toKebab(
            answers.dynamodb_table_name || '',
        ).replace(/[^a-zA-Z0-9_]/g, '-');
        answers.dynamodb_table_global_name = `${answers.application_code}_${answers.dynamodb_table_name}`

        return answers;
    }
};

module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Cool README.md template';
    }

    getQuestions() {
        return [
            {
                name: 'github_account_name',
                message: 'What is the GitHub account name?',
            },
            {
                name: 'repository_name',
                message: 'What is the repository name?',
            },
            {
                name: 'project_name',
                message: 'What is the project name?',
            },
            {
                name: 'author_name',
                message: 'What is the author full name?',
            },
            {
                name: 'author_linkedin_profile',
                message: 'What is the LinkedIn profile code of the author?',
            },
            {
                name: 'is_netlify',
                message: 'Will the project be deployed on Netlify?',
                type: 'confirm',
                default: false
            },
        ];
    }
};

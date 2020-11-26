module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'NPM project';
    }

    getQuestions() {
        return [
            {
                message: 'What is the project name?',
                name: 'company_name',
            },
            {
                message: 'What is the author name?',
                name: 'author_name',
            },
        ];
    }

    refineAnswers(answers) {
        answers.year = (new Date()).getFullYear();

        return answers;
    }

    getDevDependencies() {
        return {
            destination: '[company_name]/',
            packages: ['husky', 'prettier', 'pretty-quick', 'multi-semantic-release'],
        };
    }
};

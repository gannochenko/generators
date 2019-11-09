module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'NPM company';
    }

    getQuestions() {
        return [
            {
                message: 'What is the NPM company name?',
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
            packages: ['lerna', 'husky', 'prettier', 'pretty-quick'],
        };
    }
};

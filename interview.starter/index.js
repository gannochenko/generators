module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Interview starter';
    }

    getQuestions() {
        return [
            {
                message: 'What is the exercise name?',
                name: 'exercise_name',
            },
        ];
    }

    getDependencies() {
        return {
            destination: '[exercise_name]/',
            packages: ['@types/jest', '@types/node', 'jest', 'ts-jest', 'ts-node', 'typescript'],
        };
    }
};

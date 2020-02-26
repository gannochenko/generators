module.exports.Generator = class Generator {
    constructor(util) {
        this.util = util;
    }

    getName() {
        return 'Page for microservice.frontend';
    }

    getQuestions() {
        return [
            {
                message: 'What is the page name?',
                name: 'page_name',
            },
        ];
    }

    refineAnswers(answers) {
        const { textConverter } = this.util;

        if (textConverter) {
            answers.page_name_pascal = textConverter.toPascal(
                answers.page_name,
            );
            answers.page_name_camel = this.lCFirst(textConverter.toPascal(
                answers.page_name,
            ));
        }

        return answers;
    }

    lCFirst(value) {
        return `${value.substr(0, 1).toLowerCase()}${value.substr(
            1,
            value.length - 1,
        )}`;
    }
};

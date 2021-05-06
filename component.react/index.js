module.exports.Generator = class Generator {
    getName() {
        // this is the name your generator will appear in the list under
        return 'React Component boilerplate';
    }

    getQuestions() {
        return [
            {
                message: 'What is the component name?',
                name: 'component_name',
            },
            {
                message: 'Forward ref?',
                type: 'confirm',
                name: 'forward_ref',
                default: true,
            },
            {
                message: 'Add tests?',
                type: 'confirm',
                name: 'use_tests',
                default: true,
            },
        ];
    }

    refineAnswers(answers) {
        if (this.util.textConverter) {
            answers.component_name_pascal = this.util.textConverter.toPascal(
                answers.component_name,
            );
            answers.component_name = this.util.textConverter.toKebab(
                answers.component_name,
            );
        }

        return answers;
    }
};

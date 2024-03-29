const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        'prettier',
        'import',
        'react',
        'react-hooks',
        '@typescript-eslint',
        'graphql',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    env: {
        es2021: true,
        browser: true,
        jest: true,
        node: true,
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false },
        ],
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        'no-restricted-syntax': 'off',
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        'react/prop-types': 'off',
    },
};

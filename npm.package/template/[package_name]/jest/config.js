module.exports = {
    verbose: true,
    rootDir: '../src',
    setupFiles: ['<rootDir>/../jest/setup.ts'],
    setupFilesAfterEnv: [
<% if(is_ui) { %>
        '@testing-library/jest-dom/extend-expect',
        'jest-styled-components',
<% } %>
        '<rootDir>/../jest/extend.js',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    },
    testRegex: '\\.test\\.tsx?$',
};

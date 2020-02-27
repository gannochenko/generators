module.exports = {
    verbose: true,
    rootDir: '../src',
    setupFiles: ['<rootDir>/../jest/setup.ts'],
<% if(is_ui) { %>
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
<% } %>
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '\\.test\\.tsx?$',
};

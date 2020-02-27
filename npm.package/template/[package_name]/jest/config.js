module.exports = {
    verbose: true,
    rootDir: '../src',
    setupFiles: ['<rootDir>/../jest/setup.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '\\.test\\.tsx?$',
};

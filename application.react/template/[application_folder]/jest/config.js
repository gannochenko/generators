module.exports = {
    verbose: true,
    rootDir: '../common',
    setupFiles: ['<rootDir>/../jest/setup.js'],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
    },
};

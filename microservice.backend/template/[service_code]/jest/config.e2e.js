const config = require('./config.js');

module.exports = {
    ...config,
    testRegex: '\\.integration\\.(j|t)s$',
    globalSetup: '<rootDir>/../jest/env-seed.ts',
};

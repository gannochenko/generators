const webpackConfig = require('./webpack.config');

module.exports = {
    ...webpackConfig,
    externals: undefined,
};

const nodeExternals = require('webpack-node-externals');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');
const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    mode: 'production',
    // devtool: 'inline-source-map',
    output: {
        libraryTarget: 'commonjs',
        // pay attention to this
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternals()],
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new Dotenv({
            systemvars: false,
        }),
        new DefinePlugin({
            __DEV__: true,
        }),
    ],
};

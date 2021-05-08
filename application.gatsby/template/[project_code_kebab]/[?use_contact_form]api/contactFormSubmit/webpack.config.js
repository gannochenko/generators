// const nodeExternals = require('webpack-node-externals');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');
const { allowedEnvVariables } = require('./.env.js');

const getEnv = () => {
    const result = [];

    allowedEnvVariables.forEach((variableName) => {
        if (
            variableName in process.env &&
            process.env[variableName] !== undefined
        ) {
            result[`process.env.${variableName}`] =
                '"' + process.env[variableName] + '"';
        }
    });

    return result;
};

module.exports = {
    mode: 'production',
    // devtool: 'inline-source-map',
    entry: './src/main.js',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    // externals: [nodeExternals()],
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
        new DefinePlugin(getEnv()),
    ],
};

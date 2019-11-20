const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const resolve = require('resolve');
const NodemonPlugin = require('nodemon-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');

module.exports = (env, argv) => {
    const pEnv = process.env;
    const development =
        argv.mode === 'development' || pEnv.NODE_ENV === 'development';
    const useDebugger = pEnv.USE_DEBUGGER;
    const useDebuggerBrk = pEnv.USE_DEBUGGER_BRK;
    const debuggerPort = pEnv.NETWORK__PORT__DEBUGGER;

    const sourceFolder = path.join(__dirname, 'src');
    const destinationFolder = path.join(__dirname, 'build');

    const devArgs = [];
    let devtool = 'none';
    if (useDebugger || useDebuggerBrk) {
        devArgs.push(`--inspect${useDebuggerBrk ? '-brk' : ''}=0.0.0.0:${debuggerPort}`);
        devtool = 'inline-source-map';
    }

    return {
        entry: path.join(sourceFolder, 'application.ts'),
        target: 'node',
        node: {
            __filename: true,
            __dirname: true,
        },
        externals: [nodeExternals()],
        mode: development ? 'development' : 'production',
        output: {
            libraryTarget: 'commonjs',
            path: destinationFolder,
            filename: 'index.js',
        },
        resolve: {
            extensions: ['.js', '.ts'],
            symlinks: false,
        },
        devtool,
        module: {
            rules: [
                {
                    test: /\.(j|t)s?$/,
                    enforce: 'pre',
                    use: [
                        {
                            options: {
                                eslintPath: require.resolve('eslint'),
                                emitWarning: true,
                            },
                            loader: require.resolve('eslint-loader'),
                        },
                    ],
                    include: sourceFolder,
                    exclude: /node_modules/,
                },
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
                {
                    test: /\.(j|t)s?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/env',
                                        {
                                            targets: { node: '8.10' },
                                        },
                                    ],
                                    '@babel/preset-typescript',
                                ],
                                plugins: [
                                    [
                                        '@babel/plugin-proposal-decorators',
                                        { legacy: true },
                                    ],
                                    '@babel/plugin-proposal-object-rest-spread',
                                    [
                                        '@babel/plugin-proposal-class-properties',
                                        { loose: true },
                                    ],
                                ],
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            development &&
                new ForkTsCheckerWebpackPlugin({
                    typescript: resolve.sync('typescript', {
                        basedir: path.join(__dirname, 'node_modules'),
                    }),
                    async: false,
                    checkSyntacticErrors: true,
                    tsconfig: path.join(__dirname, 'tsconfig.json'),
                    reportFiles: [
                        '**',
                        '!**/*.json',
                        '!**/__test__/**',
                        '!**/?(*.)(integration|test).*',
                    ],
                    watch: sourceFolder,
                    silent: true,
                }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.ProvidePlugin({
                logger: ['@bucket-of-bolts/util', 'logger'],
            }),
            new webpack.DefinePlugin({
                __DEV__: development,
                __TEST__: false,
            }),
            development &&
                new NodemonPlugin({
                    nodeArgs: devArgs,
                    watch: destinationFolder,
                    ext: 'js,ts,graphql',
                }),
        ].filter(x => !!x),
    };
};

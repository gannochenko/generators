const path = require('path');
const webpack = require('webpack');

const src = path.resolve(__dirname, './src');
const build = path.resolve(__dirname, './public');
const buildProduction = path.resolve(__dirname, './build');

module.exports = (env, argv) => {
    const development = argv.mode === 'development';

    return {
        mode: 'none',
        target: 'webworker',
        entry: './src/worker.ts',
        output: {
            filename: 'worker.js',
            path: development ? build : buildProduction,
        },
        resolve: {
            modules: ['node_modules', src],
            extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({}),
        ],
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                compilerOptions: {
                                    module: 'esnext',
                                    noEmit: false,
                                },
                            },
                        },
                    ],
                },
            ],
        },
    };
};

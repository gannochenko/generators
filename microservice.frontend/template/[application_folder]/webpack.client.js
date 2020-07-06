const webpack = require('webpack');
const path = require('path');
const resolve = require('resolve');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const pEnv = process.env;
    const development =
        argv.mode === 'development' || pEnv.NODE_ENV === 'development';

    const sourceFolder = path.join(__dirname, 'src/common');
    const buildFolder = path.join(__dirname, 'build');
    const publicFolder = development
        ? buildFolder
        : path.join(buildFolder, 'public');

    const hmrPort = pEnv.NETWORK__PORT__HMR || <%- port_hmr %>;
    const bundleAnalyserPort = pEnv.NETWORK__PORT__BUNDLE_ANALYSER || <%- port_bundle_analyzer %>;

    return {
        entry: development
            ? [
                  'react-hot-loader/patch',
                  `webpack-dev-server/client?http://localhost:${hmrPort}`,
                  'webpack/hot/only-dev-server',
                  './src/client/index.dev',
              ]
            : { index: './src/client/index' },
        target: 'web',
        mode: development ? 'development' : 'production',
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            symlinks: false,
        },
        devtool: development ? 'source-map' : false,
        optimization: development
            ? {}
            : {
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        cache: true,
                        parallel: true,
                        sourceMap: true,
                        terserOptions: {
                            warnings: false,
                            parse: {},
                            compress: {
                                comparisons: false,
                            },
                            mangle: true,
                            // module: false,
                            output: {
                                comments: false,
                                ascii_only: true,
                            },
                            // toplevel: false,
                            // nameCache: null,
                            // ie8: false,
                            // keep_classnames: undefined,
                            // keep_fnames: false,
                            // safari10: false,
                        },
                    }),
                ],
                nodeEnv: 'production',
                usedExports: true,
                sideEffects: true,
                concatenateModules: true,
                splitChunks: {
                    chunks: 'all',
                    minSize: 30000,
                    minChunks: 1,
                    maxAsyncRequests: 5,
                    maxInitialRequests: 3,
                    name: true,
                    cacheGroups: {
                        commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendor',
                            chunks: 'all',
                        },
                        main: {
                            chunks: 'all',
                            minChunks: 2,
                            reuseExistingChunk: true,
                            enforce: true,
                        },
                    },
                },
                runtimeChunk: true,
            },
        module: {
            rules: [
                {
                    test: /\.(j|t)sx?$/,
                    enforce: 'pre',
                    use: [
                        {
                            options: {
                                formatter: require.resolve(
                                    'react-dev-utils/eslintFormatter',
                                ),
                                eslintPath: require.resolve('eslint'),
                                emitWarning: true,
                            },
                            loader: require.resolve('eslint-loader'),
                        },
                    ],
                    include: sourceFolder,
                },

                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },

                {
                    test: /\.(j|t)sx?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/react',
                                    [
                                        '@babel/env',
                                        {
                                            modules: false,
                                            targets: {
                                                browsers: ['last 2 versions'],
                                            },
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
                                    '@babel/plugin-proposal-class-properties',
                                    'babel-plugin-styled-components',
                                ],
                                cacheDirectory: true,
                            },
                        },
                    ],
                    include: [path.join(__dirname, 'src/client'), sourceFolder],
                },
                {
                    test: /\.(txt)$/,
                    use: 'raw-loader',
                },
                {
                    test: /\.(html)$/,
                    use: 'html-loader',
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.(jpe?g|gif|png|svg|ico)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10 * 1024,
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                },
                                pngquant: {
                                    quality: [0.65, 0.9],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // webp: {
                                //     quality: 75,
                                // },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                typescript: resolve.sync('typescript', {
                    basedir: path.join(__dirname, 'node_modules'),
                }),
                async: false,
                checkSyntacticErrors: true,
                tsconfig: path.join(__dirname, 'tsconfig.json'),
                compilerOptions: {
                    module: 'esnext',
                    moduleResolution: 'node',
                    resolveJsonModule: true,
                    isolatedModules: true,
                    noEmit: true,
                    jsx: 'preserve',
                },
                reportFiles: [
                    '**',
                    '!**/*.json',
                    '!**/__test__/**',
                    '!**/?(*.)test.*',
                ],
                watch: development ? sourceFolder : null,
                silent: true,
                formatter: typescriptFormatter,
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            // new webpack.ProvidePlugin({
            //     _: [path.join(__dirname, `common/lib/lodash.js`), 'default'],
            // }),
            new webpack.NamedModulesPlugin(),
            development && new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                __CLIENT__: true,
                __SERVER__: false,
                __DEV__: development,
                __TEST__: false,
            }),
            development &&
                new BundleAnalyzerPlugin({
                    analyzerHost: '0.0.0.0',
                    analyzerPort: bundleAnalyserPort,
                    openAnalyzer: false,
                }),
            !development &&
                new CopyPlugin([
                    {
                        from: path.join(__dirname, 'public'),
                        to: publicFolder,
                    },
                ]),
            !development &&
                new HtmlWebpackPlugin({
                    template: './index.html',
                    filename: path.join(publicFolder, 'index.html'),
                    inject: true,
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true,
                    },
                }),
            !development &&
            new webpack.HashedModuleIdsPlugin({
                hashFunction: 'sha256',
                hashDigest: 'hex',
                hashDigestLength: 20,
            }),
            !development && new HtmlWebpackInjector(),
            new Dotenv({
                systemvars: true,
            }),
            !development && new FaviconsWebpackPlugin({
                logo: './src/common/components/Header/assets/logo.png',
                cache: true,
                prefix: '/assets/',
                favicons: {
                    appName: '<%- application_name %>',
                    appDescription: '<%- application_name %>',
                    background: '#ddd',
                    theme_color: '#333',
                },
            }),
        ].filter(x => !!x),
        devServer: {
            host: '0.0.0.0',
            port: hmrPort,
            historyApiFallback: true,
            hot: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            overlay: true,
        },
        output: {
            path: publicFolder,
            publicPath: development ? `http://localhost:${hmrPort}/` : '/',
            filename: development ? 'client.js' : '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].chunk.js',
        },
    };
};

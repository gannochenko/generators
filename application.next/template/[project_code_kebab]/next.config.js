const withImages = require('next-images');
const withPWA = require('next-pwa');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { meta } = require('./src/meta');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA(
    withImages({
        webpack(config) {
            config.plugins.push(
                new FaviconsWebpackPlugin({
                    logo: './src/components/Header/assets/logo.png',
                    cache: true,
                    prefix: '/_next/static/assets/',
                    outputPath: '../.next/static/assets',
                    favicons: {
                        appName: meta.application.title,
                        appDescription: meta.application.description,
                        background: '#ddd',
                        theme_color: meta.theme.color,
                        start_url: '/',
                    },
                }),
            );

            return config;
        },
        inlineImageLimit: 9000,
        poweredByHeader: false,
        pwa: {
            disable: !isProd,
            dest: 'public',
        },
    }),
);

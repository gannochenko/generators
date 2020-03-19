const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../../src/**/*.story.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        'storybook-addon-styled-component-theme/dist/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                // Optional
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.plugins = [
            new TsconfigPathsPlugin({}),
        ];
        return config;
    },
};

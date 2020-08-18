const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../**/*.visual.story.tsx'],
    addons: [],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
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

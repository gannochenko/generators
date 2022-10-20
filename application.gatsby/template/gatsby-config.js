/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const {
    site: { title, description, keywords, author, baseURL },
} = require('./src/meta/site');
const { palette } = require('./src/style/palette');

module.exports = {
    // pathPrefix: '/foo',

    siteMetadata: {
        title,
        description,
        author,
        keywords,
        siteUrl: baseURL,
    },
    flags: {},
    plugins: [
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
                // The values for each key in this example are the defaults the plugin uses.
                sourceMap: true,
                autoLabel: 'dev-only',
                labelFormat: `[local]`,
                cssPropOptimization: true,
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'roboto:300,400',
                    // 'source sans pro:300,400,400i,700'
                ],
                display: 'swap',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/static/assets`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: 'images',
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {},
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    default: require.resolve(
                        './src/components/default/PageLayout/PageLayout.tsx',
                    ),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: 'images',
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1035,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                excludes: ['/blog-drafts/', '/blog-drafts/*'],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: title,
                short_name: title,
                description: description,
                start_url: '/',
                background_color: '#fff',
                theme_color: '#333',
                display: 'minimal-ui',
                categories: [], // https://github.com/w3c/manifest/wiki/Categories
                icon: 'static/icon.png', // This path is relative to the root of the site.
            },
        },
        // 'gatsby-plugin-typescript',
        {
            // https://github.com/d4rekanguok/gatsby-typescript/tree/master/packages/gatsby-plugin-ts
            resolve: `gatsby-plugin-ts`,
            options: {
                tsLoader: {
                    logLevel: 'warn',
                },
                // forkTsCheckerPlugin: {
                // },
                fileName: `types/graphql-types.ts`,
                codegen: false,
                codegenDelay: 250,
            },
        },
        'gatsby-plugin-catch-links',
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: palette.primary.main,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },

        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: process.env.GA_TRACKING_ID || 'G-XYZ',
                // Puts tracking script in the head instead of the body
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
    ],
};

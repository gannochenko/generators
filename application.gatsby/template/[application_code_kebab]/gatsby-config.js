require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const { site: { title, description, keywords, author, baseURL } } = require('./src/meta/site');
const { palette } = require('./src/style/palette');

module.exports = {
<% if(path_prefix) { %>
    pathPrefix: '/<%- path_prefix %>',
<% } else { %>
    // pathPrefix: '/foo',
<% } %>
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
                        './src/components/PageLayout/PageLayout.tsx',
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
<% if (use_offline) { %>
                cache_busting_mode: 'none',
<% } %>
            },
        },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
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
<% if (use_offline) { %>
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                workboxConfig: {
                    globPatterns: ['**/*'],
                },
                // appendScript: require.resolve(`src/custom-sw-code.js`),
            },
        },
<% } %>
<% if(ga_id) { %>
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
<% } %>
    ],
};

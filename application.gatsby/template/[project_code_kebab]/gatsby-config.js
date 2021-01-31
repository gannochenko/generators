require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
<% if(path_prefix) { %>
    pathPrefix: '/<%- path_prefix %>',
<% } else { %>
    // pathPrefix: '/foo',
<% } %>
    siteMetadata: {
        title: '<%- project_name %>',
        description: '<%- project_description %>',
        author: '@<%- github_account_name %>',
        keywords: ['one', 'two'],
        siteUrl: 'https://<%- project_domain %>',
    },
    plugins: [
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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
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
                        './src/components/BodyLayout/BodyLayout.tsx',
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
                exclude: ['/blog-drafts/', '/blog-drafts/*'],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Income Bowls',
                short_name: 'Income Bowls',
                description: 'Income Bowls',
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
<% if (use_offline) { %>
        {
            resolve: 'gatsby-plugin-offline',
                options: {
                workboxConfig: {
                    globPatterns: ['**/*'],
                },
            },
        },
<% } %>
<% if(ga_id) { %>
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: process.env.GA_TRACKING_ID,
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional optional fields
                // sampleRate: 5,
                // siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
            },
        },
<% } %>
    ],
};

/* eslint-disable @typescript-eslint/no-use-before-define, no-console, @typescript-eslint/no-var-requires */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { introspectionQuery, graphql, printSchema } = require('gatsby/graphql');
const write = require('write');
// const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const path = require('path');
const allowedEnvVariables = require('./.env.js').allowedEnvVariables;

const { fillTemplate, <%- content_name_snake_uc %>_DETAIL } = require('./src/pathTemplates');

const vercelEnv = process.env.VERCEL_GIT_COMMIT_REF;
if (vercelEnv !== undefined && vercelEnv !== 'master') {
    throw new Error('Vercel, dont make me do this.');
}

/**
 * Generate GraphQL schema.json file to be read by tslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 */
exports.onPostBootstrap = async ({ store }) => {
    try {
        const { schema } = store.getState();
        const jsonSchema = await graphql(schema, introspectionQuery);
        const sdlSchema = printSchema(schema);

        write.sync('schema.json', JSON.stringify(jsonSchema.data), {});
        write.sync('schema.graphql', sdlSchema, {});

        console.log('\n\n[gatsby-plugin-extract-schema] Wrote schema\n'); // eslint-disable-line
    } catch (error) {
        console.error(
            '\n\n[gatsby-plugin-extract-schema] Failed to write schema: ',
            error,
            '\n',
        );
    }
};

const createMDXPages = async ({ graphql, actions }) => {
    const result = await graphql(`
        query CreatePagesQuery {
            allMdx {
                edges {
                    node {
                        id
                        fileAbsolutePath
                        frontmatter {
                            published
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        console.error(result.errors);
        throw new Error(result.errors);
    }

    if (!result.data || !result.data.allMdx) {
        return;
    }

    const edges = result.data.allMdx.edges;
    if (!edges) {
        return;
    }

    edges.forEach(({ node }) => {
        const {
            fileAbsolutePath,
            frontmatter: { slug, published } = {},
        } = node;

        const match = fileAbsolutePath.match(
            /\/content\/([^\/]+)\/([^\/]+)\//,
        );
        if (!match) {
            console.warn(
                'Was not able to parse file path structure. Skipping.',
            );
            return;
        }

        const [, fileSlug] = match;
        const realSlug = slug || fileSlug;

        if (!realSlug) {
            console.warn('Entry without slug detected. Skipping.');
            return;
        }

        let realPath = fillTemplate(<%- content_name_snake_uc %>_DETAIL, {slug: realSlug});
        if (!published) {
            realPath = `/drafts${realPath}`;
        }

        actions.createPage({
            // Encode the route
            path: realPath,
            // Layout for the page
            component: path.resolve('./src/templates/<%- content_name_pascal %>Detail/<%- content_name_pascal %>Detail.tsx'),
            // Values defined here are injected into the page as props and can
            // be passed to a GraphQL query as arguments
            context: {
                id: node.id,
            },
        });
    });
};

exports.createPages = async ({ graphql, actions }) => {
    await createMDXPages({ graphql, actions });
};

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

exports.onCreateWebpackConfig = ({
    stage,
    // rules,
    // loaders,
    plugins,
    actions,
}) => {
    actions.setWebpackConfig({
        plugins: [
            plugins.define({
                __DEV__: stage === `develop` || stage === `develop-html`,
                ...getEnv(),
            }),
        ],
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            symlinks: false,
        },
    });
};

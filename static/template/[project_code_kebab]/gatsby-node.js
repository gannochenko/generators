/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { introspectionQuery, graphql, printSchema } = require('gatsby/graphql');
const write = require('write');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const path = require('path');

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

exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
};

<% if(use_blog) { %>
exports.createPages = ({ graphql, actions }) => {
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                query CreatePagesQuery {
                    allMdx {
                        edges {
                            node {
                                id
                                frontmatter {
                                    path
                                    published
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    console.error(result.errors);
                    reject(result.errors);
                }

                let edges = result.data.allMdx.edges;
                if (!edges) {
                    return;
                }

                edges = edges.filter(
                    edge =>
                        edge.node.frontmatter.path &&
                        edge.node.frontmatter.path.startsWith('/blog'),
                );
                edges.forEach(({ node }) => {
                    const {
                        frontmatter: { path: pathProperty, published },
                    } = node;
                    const realPath = published
                        ? pathProperty
                        : pathProperty.replace(/^\/blog\//, '/blog-drafts/');

                    actions.createPage({
                        // Encode the route
                        path: realPath,
                        // Layout for the page
                        component: path.resolve(
                            './src/components/BlogPageLayout/BlogPageLayout.tsx',
                        ),
                        // Values defined here are injected into the page as props and can
                        // be passed to a GraphQL query as arguments
                        context: {
                            id: node.id,
                        },
                    });
                });
            }),
        );
    });
};
<% } %>
<% if(no_blog) { %>
    exports.createPages = ({ graphql, actions }) => {
        return new Promise((resolve, reject) => {
            resolve(
                graphql(`
                query CreatePagesQuery {
                    allMdx {
                        edges {
                            node {
                                id
                                frontmatter {
                                    path
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                    if (result.errors) {
                        console.error(result.errors);
                        reject(result.errors);
                    }

                    let edges = result.data.allMdx.edges;
                    if (!edges) {
                        return;
                    }

                    edges.forEach(({ node }) => {
                        const {
                            frontmatter: { path: pathProperty, published },
                        } = node;

                        actions.createPage({
                            // Encode the route
                            path: pathProperty,
                            // Layout for the page
                            component: path.resolve(
                                './src/components/ContentPageLayout/ContentPageLayout.tsx',
                            ),
                            // Values defined here are injected into the page as props and can
                            // be passed to a GraphQL query as arguments
                            context: {
                                id: node.id,
                            },
                        });
                    });
                }),
            );
        });
    };
<% } %>

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
            }),
        ],
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
};

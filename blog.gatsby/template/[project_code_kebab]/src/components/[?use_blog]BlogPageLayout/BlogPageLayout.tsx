import React, { FunctionComponent, useMemo } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Props } from './type';
import { LayoutInner } from '../LayoutInner';
import { BlogPostPageContainer } from './components/BlogPostPageContainer';
import { BlogPostHeader } from './components/BlogPostHeader';
import { Link } from '../Link';
import { Container } from '../Container';
import { Article } from './style';

export const BlogPageLayout: FunctionComponent<Props> = ({
    data: { mdx },
    path,
}) => {
    const location = useMemo(() => ({ pathname: path }), [path]);

    return (
        <LayoutInner pageContext={mdx} location={location} showTitle={false}>
            <Article>
                <BlogPostHeader data={mdx} />
                <BlogPostPageContainer>
                    <MDXRenderer pageContext={mdx}>{mdx.body}</MDXRenderer>
                    <Container>
                        <Link
                            to={
                                mdx.frontmatter.published
                                    ? '/blog'
                                    : '/blog-drafts'
                            }
                        >
                            &larr; Back to list
                        </Link>
                    </Container>
                </BlogPostPageContainer>
            </Article>
        </LayoutInner>
    );
};

export const blogPageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                date
                keywords
                description
                published
                images {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1240, quality: 80) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    author
                    source
                    sourceText
                    is_cover
                    galleryId
                }
            }
        }
    }
`;

export default BlogPageLayout;

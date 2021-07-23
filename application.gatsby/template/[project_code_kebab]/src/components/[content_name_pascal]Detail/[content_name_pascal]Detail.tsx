import React, { FC, useMemo } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { SRLWrapper } from 'simple-react-lightbox';

import { <%- content_name_pascal %>DetailPropsType } from './type';
import { PageLayout } from '../PageLayout';
import { lightBoxOptions } from '../../util/lightBoxOptions';

/**
 * This component is for wrapping up pages that lay in the content/ folder.
 * See gatsby-node.js for details.
 */
export const <%- content_name_pascal %>Detail: FC<<%- content_name_pascal %>DetailPropsType> = ({
    data: { mdx },
    path,
}) => {
    const location = useMemo(() => ({ pathname: path }), [path]);

    return (
        <PageLayout pageContext={mdx} location={location}>
            <SRLWrapper options={lightBoxOptions}>
                <MDXRenderer pageContext={mdx}>{mdx.body}</MDXRenderer>
            </SRLWrapper>
        </PageLayout>
    );
};

export const <%- content_name_pascal %>DetailQuery = graphql`
    query <%- content_name_pascal %>DetailQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                keywords
                description
                displayPageTitle
                images {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1240, quality: 80) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default <%- content_name_pascal %>Detail;

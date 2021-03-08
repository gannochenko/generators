import React, { FC, useMemo } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ContentPageLayoutPropsType } from './type';
import { PageContentLayout } from '../PageContentLayout';
import {
    BuildingDetailNavigateBack,
    BuildingDetailNavigateBackContainer,
} from './style';

/**
 * This component is for wrapping up pages that lay in the content/ folder.
 * See gatsby-node.js for details.
 */
export const BuildingDetail: FC<ContentPageLayoutPropsType> = ({
    data: { mdx },
    path,
}) => {
    const location = useMemo(() => ({ pathname: path }), [path]);

    return (
        <>
            <BuildingDetailNavigateBackContainer>
                <BuildingDetailNavigateBack href="/">
                    На главную
                </BuildingDetailNavigateBack>
            </BuildingDetailNavigateBackContainer>
            <PageContentLayout pageContext={mdx} location={location}>
                <MDXRenderer pageContext={mdx}>{mdx.body}</MDXRenderer>
            </PageContentLayout>
        </>
    );
};

export const buildingDetailQuery = graphql`
    query buildingDetailQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                path
                title
                keywords
                description
                displayPageTitle
                location
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

export default BuildingDetail;

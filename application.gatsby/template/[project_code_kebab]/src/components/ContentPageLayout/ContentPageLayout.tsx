import React, { FC, useMemo } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ContentPageLayoutPropsType } from './type';
import { PageContentLayout } from '../PageContentLayout';

/**
 * This component is for wrapping up pages that lay in the content/ folder.
 * See gatsby-node.js for details.
 */
export const ContentPageLayout: FC<ContentPageLayoutPropsType> = ({
    data: { mdx },
    path,
}) => {
    const location = useMemo(() => ({ pathname: path }), [path]);

    return (
        <PageContentLayout pageContext={mdx} location={location}>
            <MDXRenderer pageContext={mdx}>{mdx.body}</MDXRenderer>
        </PageContentLayout>
    );
};

export const contentPageLayoutQuery = graphql`
    query ContentEntryQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                path
            }
        }
    }
`;

export default ContentPageLayout;

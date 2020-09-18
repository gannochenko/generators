import React, { FunctionComponent, useMemo } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Props } from './type';
import { LayoutInner } from '../LayoutInner';

export const ContentPageLayout: FunctionComponent<Props> = ({
    data: { mdx },
    path,
}) => {
    const location = useMemo(() => ({ pathname: path }), [path]);

    return (
        <LayoutInner pageContext={mdx} location={location} showTitle={false}>
            <MDXRenderer pageContext={mdx}>{mdx.body}</MDXRenderer>
        </LayoutInner>
    );
};

export const contentPageQuery = graphql`
    query ContentEntrytQuery($id: String) {
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

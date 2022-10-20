import React, { forwardRef } from 'react';
import { graphql } from 'gatsby';

import { <%- content_name_pascal %>ListPropsType } from './type';
import { use<%- content_name_pascal %>ListTemplate } from './hooks/use<%- content_name_pascal %>ListTemplate';
import { PageLayout, Container, PageOffset } from '../../components/default';
import { <%- content_name_pascal %>List } from '../../components';

export const <%- content_name_pascal %>ListTemplate = forwardRef<
    HTMLDivElement,
    <%- content_name_pascal %>ListPropsType
>(function <%- content_name_pascal %>ListTemplate(props, ref) {
    const { pageLayoutProps, objectListProps } = use<%- content_name_pascal %>ListTemplate(
        ref,
        props,
    );

    return (
        <PageLayout {...pageLayoutProps}>
            <Container>
                <<%- content_name_pascal %>List {...objectListProps} />
            </Container>
            <PageOffset />
        </PageLayout>
    );
});

export const query = graphql`
    query ($skip: Int!, $limit: Int!) {
        all<%- content_name_pascal %>(
            sort: { fields: [name], order: ASC }
            limit: $limit
            skip: $skip
        ) {
            nodes {
                id
                name
                slug
                previewPhotoImage {
                    childImageSharp {
                        gatsbyImageData(width: 500, layout: FIXED)
                    }
                }
            }
        }
    }
`;

export default <%- content_name_pascal %>ListTemplate;

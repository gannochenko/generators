import React, { forwardRef } from 'react';
import { graphql } from 'gatsby';

import { LostHeritageObjectListPropsType } from './type';
import { useOKNHeritageObjectListTemplate } from './hooks/useOKNHeritageObjectListTemplate';
import { PageLayout, Container, PageOffset } from '../../components/default';
import { HeritageObjectList } from '../../components';

export const OKNHeritageObjectListTemplate = forwardRef<
    HTMLDivElement,
    LostHeritageObjectListPropsType
>(function OKNHeritageObjectListTemplate(props, ref) {
    const { pageLayoutProps, objectListProps } =
        useOKNHeritageObjectListTemplate(ref, props);

    return (
        <PageLayout {...pageLayoutProps}>
            <Container>
                <HeritageObjectList {...objectListProps} />
            </Container>
            <PageOffset />
        </PageLayout>
    );
});

export const query = graphql`
    query ($skip: Int!, $limit: Int!) {
        allHeritageObject(
            sort: { fields: [name], order: ASC }
            filter: {
                lost: { ne: true }
                heritageId: { ne: "" }
                kind: { nin: [6, 7, 8, 9, 10, 13] }
            }
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

export default OKNHeritageObjectListTemplate;

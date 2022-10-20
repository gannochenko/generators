import React, { forwardRef } from 'react';
import { graphql } from 'gatsby';

import { LostHeritageObjectListPropsType } from './type';
import { useLostHeritageObjectListTemplate } from './hooks/useLostHeritageObjectListTemplate';
import { PageLayout, Container, PageOffset } from '../../components/default';
import { HeritageObjectList } from '../../components';

export const LostHeritageObjectListTemplate = forwardRef<
    HTMLDivElement,
    LostHeritageObjectListPropsType
>(function LostHeritageObjectListTemplate(props, ref) {
    const { pageLayoutProps, objectListProps } =
        useLostHeritageObjectListTemplate(ref, props);

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
            filter: { lost: { eq: true }, kind: { nin: [6, 7, 8, 9, 10, 13] } }
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

export default LostHeritageObjectListTemplate;

import React, { forwardRef } from 'react';
import { graphql } from 'gatsby';

import { HeritageObjectListPropsType } from './type';
import { useHeritageObjectListTemplate } from './hooks/useHeritageObjectListTemplate';
import { PageLayout, Container, PageOffset } from '../../components/default';
import { HeritageObjectList } from '../../components';

export const HeritageObjectListTemplate = forwardRef<
    HTMLDivElement,
    HeritageObjectListPropsType
>(function HeritageObjectListTemplate(props, ref) {
    const { pageLayoutProps, objectListProps } = useHeritageObjectListTemplate(
        ref,
        props,
    );

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
            filter: { lost: { ne: true }, kind: { nin: [6, 7, 8, 9, 10, 13] } }
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

export default HeritageObjectListTemplate;

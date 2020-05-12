import React from 'react';
import { RendererType } from '@gannochenko/ui';

import { Container, ErrorPage, Layout } from '../../components';
import { SEO } from '../../components/SEO';

// eslint-disable-next-line global-require
const image = require('./assets/image.jpg').default as string;

export const ForbiddenPage = () => {
    return (
        <>
            <SEO title="403 &mdash; Forbidden" />
            <Container>
                <ErrorPage
                    code="403"
                    message="Forbidden."
                    image={image}
                    imageAuthor="Reno Laithienne"
                    imageSource="https://unsplash.com/@renolaithienne"
                    imageSourceText="Unsplash"
                />
            </Container>
        </>
    );
};

export const ForbiddenPageRenderer: RendererType = () => (
    <Layout>
        <ForbiddenPage />
    </Layout>
);

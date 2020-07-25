import React, { FunctionComponent } from 'react';
import { RendererType } from '@gannochenko/ui';

import { Container, ErrorPage, Layout } from '../../components';
import { SEO } from '../../components/SEO';
import { useCurrentPageName, useScrollTop } from '../../lib';
import { ForbiddenPagePropsType } from './type';
import { useGlobalState } from '../../state/context';

// eslint-disable-next-line global-require
const image = require('./assets/image.jpg').default as string;

const ForbiddenPage: FunctionComponent<ForbiddenPagePropsType> = () => {
    const state = useGlobalState()!;
    useScrollTop();
    useCurrentPageName(state, 'forbidden');

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

export const ForbiddenPageRenderer: RendererType = ({ route }) => (
    <Layout>
        <ForbiddenPage route={route} />
    </Layout>
);

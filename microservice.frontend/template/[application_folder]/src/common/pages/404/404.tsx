import React, { FunctionComponent } from 'react';
import { RendererType } from '@gannochenko/ui';

import { Container, Layout } from '../../components';
import { SEO } from '../../components/SEO';
import { ErrorPage } from '../../components/ErrorPage';
import { useCurrentPageName, useScrollTop } from '../../lib';
import { NotFoundPagePropsType } from './type';
import { useGlobalState } from '../../state/context';

// eslint-disable-next-line global-require
const image = require('./assets/image.jpg').default as string;

const NotFoundPage: FunctionComponent<NotFoundPagePropsType> = () => {
    const state = useGlobalState()!;
    useScrollTop();
    useCurrentPageName(state, 'notFound');

    return (
        <>
            <SEO title="404 &mdash; Not found" />
            <Container>
                <ErrorPage
                    code="404"
                    message="Not found."
                    image={image}
                    imageAuthor="Giuseppe Martini"
                    imageSource="https://unsplash.com/@bear61"
                    imageSourceText="Unsplash"
                />
            </Container>
        </>
    );
};

export const NotFoundPageRenderer: RendererType = ({ route }) => (
    <Layout>
        <NotFoundPage route={route} />
    </Layout>
);

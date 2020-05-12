import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RendererType, withNotification } from '@gannochenko/ui';
import { withClient, usePage } from '../../lib';

import { Container, Layout, Link } from '../../components';

import { Page2PropsType, Page2PropsAlt } from './type';
import { mapDispatchToProps } from './dispatch';
import { ObjectLiteral } from '../../../type';
import { SEO } from '../../components/SEO';

const Page2Component: FunctionComponent<Page2PropsType> = (props) => {
    usePage(props);

    return (
        <>
            <SEO title="Page 2" />
            <Container>
                <Link to="/">Home</Link>
            </Container>
        </>
    );
};

export const Page2 = withNotification<Page2PropsAlt>(
    withClient(
        connect(
            (state: ObjectLiteral) => state.page2,
            mapDispatchToProps,
        )(Page2Component),
    ),
);

export const Page2Renderer: RendererType = () => (
    <Layout>
        <Page2 />
    </Layout>
);

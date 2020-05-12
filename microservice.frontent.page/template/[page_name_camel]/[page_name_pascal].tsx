import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { withNotification } from '@bucket-of-bolts/ui';
import {
    usePage,
} from '../../lib';
import { Container, Layout, Link, SEO } from '../../components';

import { <%- page_name_pascal %>PageProperties } from './type';
import { mapDispatchToProps } from './dispatch';

import { ObjectLiteral } from '../../../type';

const <%- page_name_pascal %>PageComponent: FunctionComponent<<%- page_name_pascal %>PageProperties> = (props) => {
    usePage(props);

    return (
        <>
            <SEO title="<%- page_name %>" />
            <Container>
                <Link to="/">Home</Link>
            </Container>
        </>
    );
};

export const <%- page_name_pascal %>Page = withNotification(
    withClient(
        connect(
            (state: ObjectLiteral) => state.<%- page_name_camel %>,
            mapDispatchToProps,
        )(<%- page_name_pascal %>PageComponent),
    ),
);

export const <%- page_name_pascal %>PageRenderer: RendererType = () => (
    <Layout>
        <<%- page_name_pascal %>Page />
    </Layout>
);

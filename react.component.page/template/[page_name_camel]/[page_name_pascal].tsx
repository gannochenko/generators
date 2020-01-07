import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { withNotification } from '@bucket-of-bolts/ui';
import {
    useErrorNotification,
    useDispatchUnload,
    withClient,
    useDispatchLoad,
} from '../../lib';

import { Layout } from '../../components';
import { <%- page_name_pascal %>PageProperties } from './type';
import { mapDispatchToProps } from './dispatch';

import { ObjectLiteral } from '../../../type';

const <%- page_name_pascal %>PageComponent: FunctionComponent<<%- page_name_pascal %>PageProperties> = ({
    dispatchLoad,
    dispatchUnload,
    client,
    error,
    notify,
}) => {
    useDispatchLoad(dispatchLoad, client);
    useDispatchUnload(dispatchUnload);
    useErrorNotification(error, notify);

    return (
        <Layout title="This is the title of the page">
            This is the content of the page
        </Layout>
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

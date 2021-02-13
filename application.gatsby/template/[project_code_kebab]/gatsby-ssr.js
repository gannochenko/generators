/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { Providers } from './src/components/Providers/Providers';
import { Layout } from './src/components/Layout';
import React from 'react';

export const wrapPageElement = ({ element, props }) => {
    return (
        <Providers>
            <Layout props={props}>{element}</Layout>
        </Providers>
    );
};

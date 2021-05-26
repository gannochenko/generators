/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { Providers } from './src/components/Providers/Providers';
import { ApplicationLayout } from './src/components/ApplicationLayout';

export const wrapPageElement = ({ element, props }) => {
    return (
        <Providers>
            <ApplicationLayout props={props}>{element}</ApplicationLayout>
        </Providers>
    );
};

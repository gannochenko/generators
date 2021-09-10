/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { Providers, ApplicationLayout } from './src/components';

export const wrapPageElement = ({ element, props }) => {
    return (
        <Providers>
            <ApplicationLayout props={props}>{element}</ApplicationLayout>
        </Providers>
    );
};

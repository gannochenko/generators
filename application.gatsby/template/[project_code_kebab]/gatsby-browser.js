/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { startEffects } from '@gannochenko/ui';
import { Root } from './src/components/Root/Root';
import { Layout } from './src/components/Layout';

startEffects();

export const wrapRootElement = Root;
export const wrapPageElement = ({ element, props }) => {
    return <Layout props={props}>{element}</Layout>;
};

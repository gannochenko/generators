import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved
import { action } from '@storybook/addon-actions';

import { <%- component_name_pascal %> } from '../<%- component_name_pascal %>';

export default {
    title: 'components/<%- component_name_pascal %>',
    component: <%- component_name_pascal %>,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <<%- component_name_pascal %> onClick={action('click!')}>{text('Content', 'Hello, world!')}</<%- component_name_pascal %>>;

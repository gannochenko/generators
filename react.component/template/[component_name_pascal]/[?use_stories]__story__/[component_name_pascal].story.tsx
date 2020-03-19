import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { <%- component_name_pascal %> } from '../<%- component_name_pascal %>';

export default {
    title: '<%- component_name_pascal %>',
    component: <%- component_name_pascal %>,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <<%- component_name_pascal %>>{text('Content', 'Hello, world!')}</<%- component_name_pascal %>>;

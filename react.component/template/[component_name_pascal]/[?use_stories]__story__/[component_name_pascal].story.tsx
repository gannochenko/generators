import React from 'react';

import { <%- component_name_pascal %> } from '../<%- component_name_pascal %>';

export default {
    title: '<%- component_name_pascal %>',
    component: <%- component_name_pascal %>,
    decorators: [],
    parameters: {},
};

export const Basic = () => <<%- component_name_pascal %>>Hello, world!</<%- component_name_pascal %>>;

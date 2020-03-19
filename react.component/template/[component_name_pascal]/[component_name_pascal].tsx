import React, { FunctionComponent } from 'react';

import {
    <%- component_name_pascal %>Root,
} from './style';
import { Props } from './type';

export const <%- component_name_pascal %>: FunctionComponent<Props> = ({
    children,
}) => {
    return (
        <<%- component_name_pascal %>Root>
            {children}
        </<%- component_name_pascal %>Root>
    );
};

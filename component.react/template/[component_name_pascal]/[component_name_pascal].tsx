import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import {
    <%- component_name_pascal %>Root,
} from './style';
import { <%- component_name_pascal %>PropsType } from './type';

export const <%- component_name_pascal %>: FunctionComponent<<%- component_name_pascal %>PropsType> = ({
    children,
    ...restProps
}) => {
    return (
        <<%- component_name_pascal %>Root {...restProps}>
            {children}
        </<%- component_name_pascal %>Root>
    );
};

<%- component_name_pascal %>.defaultProps = {

};

<%- component_name_pascal %>.propTypes = {

};

import React, { forwardRef, FC } from 'react';

import { <%- component_name_pascal %>PropsType } from './type';
import { <%- component_name_pascal %>Root } from './style';
import { use<%- component_name_pascal %> } from './hooks/use<%- component_name_pascal %>';

<% if (forward_ref) { %>
export const <%- component_name_pascal %> = forwardRef<HTMLDivElement, <%- component_name_pascal %>PropsType>(
    function <%- component_name_pascal %>(props, ref) {
<% } else { %>
export const <%- component_name_pascal %>: FC<<%- component_name_pascal %>PropsType> = (props) => {
<% } %>
        const {
            rootProps,
        } = use<%- component_name_pascal %>(
<% if (forward_ref) { %>
            ref,
<% } %>
            props
        );

        return (
            <<%- component_name_pascal %>Root {...rootProps}>
                Hello
            </<%- component_name_pascal %>Root>
        );
<% if (forward_ref) { %>
    }
);
<% } else { %>
};
<% } %>

<%- component_name_pascal %>.defaultProps = {
};

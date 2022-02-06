<% if (forward_ref) { %>
import { ForwardedRef } from 'react';
<% } %>
import { <%- component_name_pascal %>PropsType } from '../type';
<% if (forward_ref) { %>
import { useRootRef } from '../../../hooks'
<% } %>

export const use<%- component_name_pascal %> = <E extends HTMLDivElement>(
<% if (forward_ref) { %>
    ref: ForwardedRef<E>,
<% } %>
    { ...props }: <%- component_name_pascal %>PropsType
) => {
<% if (forward_ref) { %>
    const rootRef = useRootRef<E>(ref);
<% } %>

    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
<% if (forward_ref) { %>
            ref: rootRef,
<% } %>
        },
    };
};

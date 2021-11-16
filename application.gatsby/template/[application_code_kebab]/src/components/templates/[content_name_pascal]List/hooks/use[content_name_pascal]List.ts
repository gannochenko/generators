import { Ref } from 'react';
import { <%- content_name_pascal %>ListPropsType } from '../type';

export const use<%- content_name_pascal %>List = (
    ref: Ref<HTMLDivElement>,
    { data, ...props }: <%- content_name_pascal %>ListPropsType,
) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        data: data ?? [],
    };
};

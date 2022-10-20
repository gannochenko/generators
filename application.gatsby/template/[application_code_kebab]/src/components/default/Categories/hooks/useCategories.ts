import { ForwardedRef } from 'react';
import { CategoriesPropsType } from '../type';

export const useCategories = <E extends HTMLDivElement>({
    ...props
}: CategoriesPropsType) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
        },
    };
};

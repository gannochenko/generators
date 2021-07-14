import { Ref } from 'react';
import { HomePageHeaderPropsType } from '../type';

export const useHomePageHeader = (
    ref: Ref<unknown>,
    { propA, ...props }: HomePageHeaderPropsType
) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref // same for the ref
        },
    };
};

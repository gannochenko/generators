import { Ref } from 'react';
import { MainHeaderPropsType } from '../type';

export const useMainHeader = (
    ref: Ref<unknown>,
    { propA, ...props }: MainHeaderPropsType
) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref // same for the ref
        },
    };
};

import { Ref } from 'react';
import { BuildingListPropsType } from '../type';

export const useBuildingList = (
    ref: Ref<unknown>,
    { data, ...props }: BuildingListPropsType,
) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        data: data || [],
    };
};

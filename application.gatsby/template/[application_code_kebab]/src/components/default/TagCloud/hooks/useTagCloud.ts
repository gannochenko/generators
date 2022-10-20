import { uniq } from 'lodash';
import { TagCloudPropsType } from '../type';
import { useMemo } from 'react';

export const useTagCloud = <E extends HTMLDivElement>({
    tags,
    ...props
}: TagCloudPropsType) => {
    const safeTags = useMemo(() => uniq(tags ?? []).filter((x) => !!x), [tags]);

    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
        },
        tags: safeTags,
    };
};

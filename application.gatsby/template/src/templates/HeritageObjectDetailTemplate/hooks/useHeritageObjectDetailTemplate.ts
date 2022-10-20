import { useMemo } from 'react';

import { HeritageObjectDetailPropsType } from '../type';

export const useHeritageObjectDetailTemplate = ({
    data,
    path,
    ...props
}: HeritageObjectDetailPropsType) => {
    const location = useMemo(() => ({ pathname: path ?? '' }), [path]);

    const itemData = data?.allHeritageObject?.nodes?.[0];

    return {
        rootProps: props,
        pageLayoutProps: {
            location,
        },
        detailPageProps: {
            data: itemData,
        },
    };
};

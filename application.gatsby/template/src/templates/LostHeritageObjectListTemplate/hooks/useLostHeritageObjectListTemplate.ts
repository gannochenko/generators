import { Ref, useMemo } from 'react';

import { LostHeritageObjectListPropsType } from '../type';
import {
    fillTemplate,
    HERITAGE_LIST,
    HERITAGE_LIST_PAGE,
} from '../../../pathTemplates';

export const useLostHeritageObjectListTemplate = (
    ref: Ref<HTMLDivElement>,
    { data, path, pageContext, ...props }: LostHeritageObjectListPropsType,
) => {
    const location = useMemo(() => ({ pathname: path ?? '' }), [path]);

    return {
        rootProps: {
            ...props,
            ref,
        },
        pageLayoutProps: {
            location,
            title: 'Утраченные объекты',
        },
        objectListProps: {
            data: data?.allHeritageObject?.nodes ?? [],
            urlTemplates: {
                indexURL: fillTemplate(HERITAGE_LIST, { kind: 'lost' }),
                pageURL: fillTemplate(HERITAGE_LIST_PAGE, { kind: 'lost' }),
            },
            ...pageContext,
        },
    };
};

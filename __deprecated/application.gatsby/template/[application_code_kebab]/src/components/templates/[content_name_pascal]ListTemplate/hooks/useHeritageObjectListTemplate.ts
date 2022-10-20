import { Ref, useMemo } from 'react';

import { HeritageObjectListPropsType } from '../type';
import {
    fillTemplate,
    HERITAGE_LIST,
    HERITAGE_LIST_PAGE,
} from '../../../pathTemplates';

export const useHeritageObjectListTemplate = (
    ref: Ref<HTMLDivElement>,
    { data, path, pageContext, ...props }: HeritageObjectListPropsType,
) => {
    const location = useMemo(() => ({ pathname: path ?? '' }), [path]);

    return {
        rootProps: {
            ...props,
            ref,
        },
        pageLayoutProps: {
            location,
            title: 'Объекты',
        },
        objectListProps: {
            data: data?.allHeritageObject?.nodes ?? [],
            urlTemplates: {
                indexURL: fillTemplate(HERITAGE_LIST, { kind: 'actual' }),
                pageURL: fillTemplate(HERITAGE_LIST_PAGE, { kind: 'actual' }),
            },
            ...pageContext,
        },
    };
};

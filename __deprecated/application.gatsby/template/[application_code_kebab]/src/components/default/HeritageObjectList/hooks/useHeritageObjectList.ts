import { ChangeEvent, Ref, useMemo } from 'react';
import { navigate } from 'gatsby';
import { fillTemplate, HERITAGE_DETAIL } from '../../../../pathTemplates';

import { HeritageObjectListPropsType } from '../type';

export const useHeritageObjectList = (
    ref: Ref<HTMLDivElement>,
    {
        data,
        numPages,
        currentPage,
        urlTemplates,
        ...props
    }: HeritageObjectListPropsType,
) => {
    const realTemplates = urlTemplates ?? {
        indexURL: '/',
        pageURL: '/',
    };

    const items = useMemo(() => {
        return (data ?? []).map((item) => {
            const { slug, name, previewPhotoImage } = item;
            const path = fillTemplate(HERITAGE_DETAIL, {
                slug,
            }) as string;

            return {
                slug,
                name,
                image: previewPhotoImage?.childImageSharp.gatsbyImageData,
                path,
            };
        });
    }, [data]);

    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        paginationProps: {
            count: numPages ?? 0,
            page: currentPage ?? 1,
            onChange: (event: ChangeEvent<unknown>, newPage: number) => {
                navigate(
                    fillTemplate(
                        newPage === 1
                            ? realTemplates.indexURL
                            : realTemplates.pageURL,
                        { page: newPage },
                    ),
                    {
                        replace: true,
                    },
                );
            },
        },
        nextPageProps: {
            to: fillTemplate(realTemplates.pageURL, {
                page: (currentPage ?? 1) + 1,
            }),
        },
        data: items,
    };
};

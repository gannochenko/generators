import { HTMLAttributes } from 'react';
import { MarginPropsType, StylePropsType } from '@gannochenko/ui.emotion';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type HeritageObjectListDataItem = {
    slug: string;
    name: string;
    previewPhotoImage?: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
};

export type HeritageObjectListPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        data: HeritageObjectListDataItem[];
        path: string;
        numPages: number;
        currentPage: number;
        urlTemplates: {
            indexURL: string;
            pageURL: string;
        };
    }> &
    MarginPropsType;

export type HeritageObjectDetailRootPropsType = StylePropsType &
    HeritageObjectListPropsType;

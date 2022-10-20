import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';

import { HeritageObjectType } from '../../../services/HeritageObject/type';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type ImageDataType = {
    childImageSharp?: {
        gatsbyImageData: IGatsbyImageData;
    };
    url: string;
};

export type HeritageObjectDetailType = HeritageObjectType & {
    previewPhotoImage?: ImageDataType;
    headerPhotoImage?: ImageDataType;
    photoImages?: ImageDataType[];
};

export type HeritageObjectDetailPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        data: HeritageObjectDetailType;
        // put your custom props here
    }> &
    MarginPropsType;

export type HeritageObjectDetailRootPropsType = StylePropsType &
    HeritageObjectDetailPropsType;

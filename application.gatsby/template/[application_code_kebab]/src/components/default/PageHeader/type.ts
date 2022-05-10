import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    MarginPropsType,
    ScalarType,
} from '@gannochenko/ui.emotion';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PageHeaderPropsType = Partial<{
    image: IGatsbyImageData;
    imageAlt: string;
    imageAuthor: string;
    imageSource: string;
    imageSourceString: string;
    imageOverlayOpacity: number;
    containerMaxWidth: ScalarType;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginPropsType;

export type MainHeaderRootPropsType = StylePropsType;

import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    ObjectLiteralType,
    MarginPropsType,
} from '@gannochenko/ui.styled-components';

export type ImageGalleryPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        images: any[];
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type ImageGalleryRootPropsType = StylePropsType & ImageGalleryPropsType;

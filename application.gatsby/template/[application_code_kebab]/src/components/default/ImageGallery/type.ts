import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    MarginPropsType,
} from '@gannochenko/ui.styled-components';

export type ImageGalleryPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        images: any[];
        // put your custom props here
    }> &
    MarginPropsType;

export type ImageGalleryRootPropsType = StylePropsType & ImageGalleryPropsType;

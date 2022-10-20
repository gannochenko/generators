import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type ImageGalleryImageType = {
    childImageSharp?: {
        gatsbyImageData: IGatsbyImageData;
    };
    url: string;
    alt?: string;
    author?: string;
    source?: string;
    uploadedAt?: string;
    capturedAt?: string;
    capturedYearStart?: number;
    capturedYearEnd?: number;
};

export type ImageGalleryPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        images: ImageGalleryImageType[];
        enableAddButton: boolean;
        // put your custom props here
    }> &
    MarginPropsType;

export type ImageGalleryRootPropsType = StylePropsType & ImageGalleryPropsType;

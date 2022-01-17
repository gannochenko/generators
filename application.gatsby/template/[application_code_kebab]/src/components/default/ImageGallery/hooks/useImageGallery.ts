import { Ref } from 'react';
import { ImageGalleryImageType, ImageGalleryPropsType } from '../type';

export const useImageGallery = (
    ref: Ref<HTMLDivElement>,
    { images, ...props }: ImageGalleryPropsType,
) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        getImageProps: (image: ImageGalleryImageType) => {
            return {
                image: image.childImageSharp.gatsbyImageData,
                alt: '',
                className: 'gatsby-resp-image-link',
            };
        },
        getImageWrapperProps: (image: ImageGalleryImageType) => {
            return {
                href: image.url,
            };
        },

        images: images ?? [],
    };
};

import { Ref } from 'react';
import { ImageGalleryPropsType } from '../type';

export const useImageGallery = (
    ref: Ref<unknown>,
    { images, ...props }: ImageGalleryPropsType,
) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },

        images,
    };
};

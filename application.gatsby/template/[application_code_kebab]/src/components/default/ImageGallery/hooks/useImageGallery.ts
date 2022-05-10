import { Ref, useCallback, useEffect, useState } from 'react';
import { ImageGalleryImageType, ImageGalleryPropsType } from '../type';
import { eventBus } from '../../../../util/eventBus';
import { EventsEnum } from '../../../../util/events';

export const useImageGallery = (
    ref: Ref<HTMLDivElement>,
    { images, enableAddButton, ...props }: ImageGalleryPropsType,
) => {
    const [showAddButton, setShowAddButton] = useState(false);

    const onEnableEditMode = useCallback(() => {
        setShowAddButton((prevState) => !prevState);
    }, []);

    useEffect(() => {
        eventBus.on(
            EventsEnum.OBJECT_DETAIL_EDIT_MODE_TOGGLE,
            onEnableEditMode,
        );

        return () =>
            eventBus.off(
                EventsEnum.OBJECT_DETAIL_EDIT_MODE_TOGGLE,
                onEnableEditMode,
            );
    }, [onEnableEditMode]);

    const onAddButtonClick = useCallback(() => {
        eventBus.dispatch(EventsEnum.OBJECT_DETAIL_ADD_PHOTO_BUTTON_CLICK);
    }, []);

    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        getGatsbyImageProps: (image: ImageGalleryImageType) => {
            return {
                image: image.childImageSharp!.gatsbyImageData,
                alt: '',
                className: 'gatsby-resp-image-link',
            };
        },
        getImageProps: (image: ImageGalleryImageType) => {
            return {
                src: image.url,
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
        showAddButton: !!enableAddButton && showAddButton,
        getAddButtonProps: () => ({
            onClick: onAddButtonClick,
        }),
        isGatsbyImage: (image: ImageGalleryImageType) => {
            return !!image.childImageSharp;
        },
    };
};

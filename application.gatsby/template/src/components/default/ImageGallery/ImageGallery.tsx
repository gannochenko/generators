import React, { forwardRef } from 'react';
import { Grid } from '@mui/material';
import { SRLWrapper } from 'simple-react-lightbox';

import { ImageGalleryPropsType } from './type';
import {
    ImageGalleryRoot,
    ImageGalleryImageWrapper,
    ImageGalleryGatsbyImage,
    ImageGalleryAddButton,
    Image,
} from './style';
import { useImageGallery } from './hooks/useImageGallery';
import { lightBoxOptions } from '../../../util/lightBoxOptions';

export const ImageGallery = forwardRef<HTMLDivElement, ImageGalleryPropsType>(
    function ImageGallery(props, ref) {
        const {
            rootProps,
            images,
            getGatsbyImageProps,
            getImageProps,
            getImageWrapperProps,
            showAddImageButton,
            getAddImageButtonProps,
            isGatsbyImage,
        } = useImageGallery(ref, props);

        return (
            <ImageGalleryRoot {...rootProps}>
                <SRLWrapper options={lightBoxOptions}>
                    <Grid container spacing={3}>
                        {images.map((image, index) => {
                            if (!image) {
                                return null;
                            }

                            return (
                                <Grid item md={4} sm={6} xs={12} key={index}>
                                    <ImageGalleryImageWrapper
                                        {...getImageWrapperProps(image)}
                                    >
                                        {isGatsbyImage(image) && (
                                            <ImageGalleryGatsbyImage
                                                {...getGatsbyImageProps(image)}
                                            />
                                        )}
                                        {!isGatsbyImage(image) && (
                                            <Image {...getImageProps(image)} />
                                        )}
                                    </ImageGalleryImageWrapper>
                                </Grid>
                            );
                        })}
                        {showAddImageButton && (
                            <Grid item md={4} sm={6} xs={12} key="placeholder">
                                <ImageGalleryAddButton {...getAddImageButtonProps()}>
                                    Добавить фотографию
                                </ImageGalleryAddButton>
                            </Grid>
                        )}
                    </Grid>
                </SRLWrapper>
            </ImageGalleryRoot>
        );
    },
);

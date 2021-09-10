import React, { forwardRef, FC } from 'react';
import { Grid } from '@material-ui/core';
import { SRLWrapper } from 'simple-react-lightbox';

import { ImageGalleryPropsType } from './type';
import {
    ImageGalleryRoot,
    ImageGalleryImageWrapper,
    ImageGalleryImage,
} from './style';
import { useImageGallery } from './hooks/useImageGallery';
import { lightBoxOptions } from '../../../util/lightBoxOptions';

export const ImageGallery: FC<ImageGalleryPropsType> = forwardRef(
    function ImageGallery(props, ref) {
        const { rootProps, images } = useImageGallery(ref, props);

        if (!images?.length) {
            return null;
        }

        return (
            <ImageGalleryRoot {...rootProps}>
                <SRLWrapper options={lightBoxOptions}>
                    <Grid container spacing={3}>
                        {images.map((picture, index) => {
                            if (!picture || !picture.image) {
                                return null;
                            }

                            return (
                                <Grid item md={4} sm={6} xs={12} key={index}>
                                    <ImageGalleryImageWrapper>
                                        <ImageGalleryImage
                                            sizes={
                                                picture.image.childImageSharp
                                                    .fluid
                                            }
                                            className="gatsby-resp-image-link"
                                        />
                                    </ImageGalleryImageWrapper>
                                </Grid>
                            );
                        })}
                    </Grid>
                </SRLWrapper>
            </ImageGalleryRoot>
        );
    },
);

ImageGallery.defaultProps = {};

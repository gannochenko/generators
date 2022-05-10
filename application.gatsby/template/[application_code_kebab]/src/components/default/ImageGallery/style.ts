import styled from '@emotion/styled';
import {
    marginProps,
    muiColor,
    muiTypography,
    reset,
} from '@gannochenko/ui.emotion';
import { GatsbyImage } from 'gatsby-plugin-image';

import { ImageGalleryRootPropsType } from './type';

export const ImageGalleryRoot = styled.div<ImageGalleryRootPropsType>`
    ${reset};
    ${marginProps};
`;

export const ImageGalleryAddButton = styled.button`
    border-radius: 2px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 15rem;
    appearance: none;
    width: 100%;
    border: 1px solid ${muiColor('secondary.light')};
    color: ${muiColor('secondary.main')};
    ${muiTypography('h3')};
    background-color: ${muiColor('background.default')};
`;

export const ImageGalleryImageWrapper = styled.a`
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
    position: relative;
    display: block;
    cursor: pointer;
    height: 15rem;
`;

export const ImageGalleryGatsbyImage = styled(GatsbyImage)`
    background-color: #c4c4c4;
    object-fit: contain !important;
    width: 100% !important;
    height: 100% !important;

    [data-placeholder-image=''] {
        object-fit: contain !important;
        width: 100% !important;
        height: 100% !important;
    }
`;

export const Image = styled.img`
    background-color: #c4c4c4;
    object-fit: contain !important;
    width: 100% !important;
`;

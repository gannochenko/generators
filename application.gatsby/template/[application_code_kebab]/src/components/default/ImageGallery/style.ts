import styled from 'styled-components';
import {
    marginProps,
    reset,
    getPropsBlocker,
} from '@gannochenko/ui.styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { ImageGalleryRootPropsType } from './type';

export const ImageGalleryRoot = styled.div.withConfig(
    getPropsBlocker,
)<ImageGalleryRootPropsType>`
    ${reset};
    ${marginProps};
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

export const ImageGalleryImage = styled(GatsbyImage)`
    background-color: #c4c4c4;
    object-fit: contain !important;
    width: 100% !important;
    height: 100% !important;
`;

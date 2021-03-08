import styled from 'styled-components';
import {
    marginProps,
    reset,
    getPropBlocker,
} from '@gannochenko/ui.styled-components';

import { ImageGalleryRootPropsType } from './type';
import Img from 'gatsby-image';

// all unwanted custom props should be blacklisted
const customProps = {};

export const ImageGalleryRoot = styled.div.withConfig(
    getPropBlocker(customProps),
)<ImageGalleryRootPropsType>`
    ${reset};
    ${marginProps};
`;

export const ImageGalleryImageWrapper = styled.div`
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
    position: relative;
    display: block;
    cursor: pointer;
`;

export const ImageGalleryImage = styled(Img)`
    background-color: #c4c4c4;
    height: 15rem;
`;

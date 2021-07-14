import styled from 'styled-components';
import {
    marginProps,
    reset,
    getPropBlocker,
    muiSpacing,
    absoluteCover,
    muiColor,
    contentAlignment,
} from '@gannochenko/ui.styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { HomePageHeaderRootPropsType } from './type';
import { Container } from '../Container';

// all unwanted custom props should be blacklisted
const customProps = {};

export const HomePageHeaderRoot = styled.div.withConfig(
    getPropBlocker(customProps),
)<HomePageHeaderRootPropsType>`
    ${reset};
    text-align: left;

    height: ${muiSpacing(100)};
    background-color: #333;
    position: relative;
    margin-bottom: ${muiSpacing(20)};

    ${marginProps};
`;

export const HomePageHeaderBackgroundImage = styled(GatsbyImage)`
    ${absoluteCover()};
    user-select: none;
    position: absolute !important;
`;

export const HomePageHeaderFadeAway = styled.div`
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 25%,
        rgba(0, 0, 0, 0.8) 60%,
        rgba(0, 0, 0, 0.7) 100%
    );
    ${absoluteCover()};
`;

export const HomePageHeaderContainer = styled(Container)`
    height: 100%;
    color: ${muiColor('grey.300')};
    ${contentAlignment('left', 'center', 'column')};
`;

export const HomePageHeaderTitle = styled.h1`
    font-size: 3rem;
    line-height: 3.2rem;
    font-weight: normal;
    margin: 0;
`;

export const HomePageHeaderSub = styled.div`
    margin-top: ${muiSpacing(5)};
`;

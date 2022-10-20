import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import {
    backgroundCover,
    absoluteCover,
    muiSpacing,
    muiColor,
    align,
    central,
    rectangle,
    muiBreakpointDown,
    muiBreakpointUp,
} from '@gannochenko/ui.emotion';

import { GatsbyImage } from 'gatsby-plugin-image';
import { MainHeaderRootPropsType } from './type';
import arrow from './assets/arrow.svg';
import { HEADER_HEIGHT } from './constants';

export const HomePageHeaderRoot = styled.div<MainHeaderRootPropsType>`
    margin-bottom: 4rem;
`;

export const HomePageHeaderMainContainer = styled.div`
    position: relative;
    min-width: 320px;
    flex-shrink: 0;
`;

const bouncedAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
`;

export const HeaderMainContainer = styled.header`
    position: relative;
    min-width: 320px;
    flex-shrink: 0;
`;

export const BackgroundImage = styled(GatsbyImage)`
    ${absoluteCover()};
    user-select: none;
    position: absolute !important;
`;

export const ImageOverlay = styled.div`
    ${absoluteCover()};
    background-color: black;
    opacity: 0.6;
`;

export const Data = styled.div`
    position: relative;
    color: ${muiColor('text.inverted')};
    font-family: ${({ theme }) => theme.typography.fontFamilyHeader};
    ${central()};
    ${align('center', 'center', 'column')};
    ${({ theme }) => css`
        ${theme.breakpoints.up('md')} {
            height: calc(100vh - ${HEADER_HEIGHT}px);
            overflow-y: hidden;
        }
    `};
    padding: 2rem 1rem;
    ${muiBreakpointDown('sm')} {
        padding-top: 4rem;
    }
`;

export const Arrow = styled.div`
    ${backgroundCover(arrow)};
    ${rectangle('72px', '53px', 0.7)};
    position: absolute;
    left: calc(50% - 1rem);

    cursor: pointer;
    bottom: 2.5rem;
    color: white;

    animation-name: ${bouncedAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in;

    display: none;
    ${muiBreakpointUp('md')} {
        display: block;
    }
`;

export const DataColumn = styled.div`
    ${align('center', 'left', 'column')};
    width: 100%;
    height: 100%;
    position: relative;
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

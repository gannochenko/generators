import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {
    backgroundCover,
    absoluteCover,
    muiSpacing,
    muiColor,
    align,
    central,
    rectangle,
    ScalarType,
    MUIThemeType,
    muiBreakpointUp,
    muiBreakpointDown,
} from '@gannochenko/ui.emotion';
import { GatsbyImage } from 'gatsby-plugin-image';

import { MainHeaderRootPropsType } from './type';
import arrow from './assets/arrow.svg';
import { HEADER_HEIGHT } from './constants';

export const PageHeaderRoot = styled.div<MainHeaderRootPropsType>`
    margin-bottom: 4rem;
`;

export const PageHeaderMainContainer = styled.div`
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
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    user-select: none;
    position: absolute !important;
    object-fit: contain;

    [data-placeholder-image=''] {
        object-fit: contain !important;
        width: 100% !important;
        height: 100% !important;
    }
`;

export const ImageOverlay = styled.div<{ opacity: number }>`
    ${absoluteCover()};
    background-color: black;
    opacity: ${(props) => props.opacity};
`;

export const PageHeaderData = styled.div<{
    maxWidth?: ScalarType;
    theme?: MUIThemeType;
}>`
    position: relative;
    color: ${muiColor('text.inverted')};
    font-family: ${({ theme }) => theme?.typography.fontFamilyHeader ?? ''};
    ${central()};
    ${align('center', 'center', 'column')};
    ${muiBreakpointUp('md')} {
        height: calc(100vh - ${HEADER_HEIGHT}px);
        overflow-y: hidden;
    }
    padding: 2rem 0 7rem 0;
    ${muiBreakpointDown('sm')} {
        padding-top: 4rem;
    }
    max-width: ${(props) => muiSpacing(props.maxWidth ?? 0)};
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

import styled from 'styled-components';
import {
    marginProps,
    reset,
    getPropBlocker,
    muiSpacing,
    backgroundCover,
    absoluteCover,
    muiColor,
    contentAlignment,
} from '@gannochenko/ui.styled-components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const backgroundImage = require('../../../static/assets/bg.jpg') as string;
import { backgroundImage } from './backgroundImage';

import { MainHeaderRootPropsType } from './type';
import { Container } from '../Container';

// all unwanted custom props should be blacklisted
const customProps = {};

export const MainHeaderRoot = styled.div.withConfig(
    getPropBlocker(customProps),
)<MainHeaderRootPropsType>`
    ${reset};
    text-align: left;

    height: ${muiSpacing(100)};
    ${backgroundCover(backgroundImage)};
    background-color: #333;
    position: relative;
    margin-bottom: ${muiSpacing(20)};

    ${marginProps};
`;

export const MainHeaderFadeAway = styled.div`
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 25%,
        rgba(0, 0, 0, 0.8) 60%,
        rgba(0, 0, 0, 0.7) 100%
    );
    ${absoluteCover()};
`;

export const MainHeaderContainer = styled(Container)`
    height: 100%;
    color: ${muiColor('grey.300')};
    ${contentAlignment('left', 'center', 'column')};
`;

export const MainHeaderTitle = styled.h1`
    font-size: 3rem;
    line-height: 3.2rem;
    font-weight: normal;
    margin: 0;
`;

export const MainHeaderSub = styled.div`
    margin-top: ${muiSpacing(5)};
`;

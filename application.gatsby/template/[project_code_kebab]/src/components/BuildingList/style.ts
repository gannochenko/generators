import styled from 'styled-components';
import {
    marginProps,
    reset,
    getPropBlocker,
    muiSpacing,
} from '@gannochenko/ui.styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { BuildingListRootPropsType } from './type';

// all unwanted custom props should be blacklisted
const customProps = {};

export const BuildingListRoot = styled.div.withConfig(
    getPropBlocker(customProps),
)<BuildingListRootPropsType>`
    ${reset};
    ${marginProps};
`;

export const BuildingCard = styled(Link)`
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: block;
`;

export const BuildingCardImage = styled(Img)`
    background-color: #c4c4c4;
    height: 15rem;
`;

export const BuildingCardTitle = styled.div`
    background-color: #fff;
    padding: ${muiSpacing(1)} ${muiSpacing(2)};
    position: absolute;
    bottom: ${muiSpacing(1.5)};
    right: 0;
    color: #333;
`;

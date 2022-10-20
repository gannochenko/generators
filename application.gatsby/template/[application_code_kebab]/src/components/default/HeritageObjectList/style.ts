import styled from '@emotion/styled';
import {
    marginProps,
    reset,
    muiSpacing,
    muiBreakpointDown,
} from '@gannochenko/ui.emotion';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeritageObjectDetailRootPropsType } from '../HeritageObjectDetail/type';

export const HeritageObjectListRoot = styled.div<HeritageObjectDetailRootPropsType>`
    ${reset};
    ${marginProps};
`;

export const HeritageObjectListItem = styled(Link)`
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: block;
    height: ${muiSpacing(100)};
`;

export const HeritageObjectListNext = styled(HeritageObjectListItem)`
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
        content: 'Далее >';
    }
    ${muiBreakpointDown('sm')} {
        display: none;
    }
`;

export const HeritageObjectListItemImage = styled(GatsbyImage)`
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
`;

export const HeritageObjectListItemName = styled.div`
    background-color: #fff;
    padding: ${muiSpacing(1)} ${muiSpacing(2)};
    position: absolute;
    bottom: ${muiSpacing(1.5)};
    right: 0;
    color: #333;
`;

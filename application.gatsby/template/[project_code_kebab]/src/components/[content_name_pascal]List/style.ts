import styled from 'styled-components';
import {
    marginProps,
    reset,
    getPropBlocker,
    muiSpacing,
} from '@gannochenko/ui.styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { <%- content_name_pascal %>ListRootPropsType } from './type';

// all unwanted custom props should be blacklisted
const customProps = {};

export const <%- content_name_pascal %>ListRoot = styled.div.withConfig(
    getPropBlocker(customProps),
)<<%- content_name_pascal %>ListRootPropsType>`
    ${reset};
    ${marginProps};
`;

export const <%- content_name_pascal %>Card = styled(Link)`
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: block;
`;

export const <%- content_name_pascal %>CardImage = styled(Img)`
    background-color: #c4c4c4;
    height: 15rem;
`;

export const <%- content_name_pascal %>CardTitle = styled.div`
    background-color: #fff;
    padding: ${muiSpacing(1)} ${muiSpacing(2)};
    position: absolute;
    bottom: ${muiSpacing(1.5)};
    right: 0;
    color: #333;
`;

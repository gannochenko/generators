import styled from 'styled-components';
import { round } from '@gannochenko/etc';
import Img from 'gatsby-image';

export const Container = styled.div<{ size: string; borderSize: string }>`
    ${round()};
    width: ${props => props.size};
    flex-shrink: 0;
    border: ${props => props.borderSize} solid white;
    overflow: hidden;
    user-select: none;
    position: relative;
`;

export const Image = styled(Img)`
    height: 100%;
    width: 100%;
    ${round()}
`;

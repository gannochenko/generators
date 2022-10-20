import styled from '@emotion/styled';
import { muiSpacing } from '@gannochenko/ui.emotion';
import { GatsbyImage } from 'gatsby-plugin-image';

export const HeritageObjectDetailRoot = styled.div``;

export const HeritageObjectDetailImageLink = styled.a`
    display: block;
    max-height: 300px;
    max-width: 300px;
`;

export const HeritageObjectDetailImage = styled(GatsbyImage)`
    border-radius: 2px;
`;

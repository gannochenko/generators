import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { foregroundColor } from '@gannochenko/ui.emotion';
import { Link as GatsbyLink } from 'gatsby';

import { LinkRootPropsType } from './type';

const fgColors = ({ inverted, theme }: LinkRootPropsType) => {
    if (inverted) {
        return css`
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
            ${foregroundColor(
                theme?.palette.primary.contrastText ?? '',
                theme?.palette.primary.contrastText ?? '',
                '200ms',
            )};
        `;
    }

    return foregroundColor(
        theme?.palette.primary.main ?? '',
        theme?.palette.primary.dark ?? '',
        '200ms',
    );
};

export const GatsbyLinkStyled = styled(GatsbyLink)<LinkRootPropsType>`
    ${fgColors};
`;

export const LinkStyled = styled.a<LinkRootPropsType>`
    ${fgColors};
`;

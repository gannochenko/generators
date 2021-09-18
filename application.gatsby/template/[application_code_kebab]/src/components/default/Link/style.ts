import { LinkRootPropsType } from './type';
import styled, { css } from 'styled-components';
import {
    foregroundColor,
    getPropsBlocker,
} from '@gannochenko/ui.styled-components';
import { Link as GatsbyLink } from 'gatsby';

const fgColors = ({ inverted, theme }: LinkRootPropsType) => {
    if (inverted) {
        return css`
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
            ${foregroundColor(
                theme.palette.primary.contrastText,
                theme.palette.primary.contrastText,
                '200ms',
            )};
        `;
    }

    return foregroundColor(
        theme.palette.primary.main,
        theme.palette.primary.dark,
        '200ms',
    );
};

export const GatsbyLinkStyled = styled(GatsbyLink).withConfig(
    getPropsBlocker,
)<LinkRootPropsType>`
    ${fgColors};
`;

export const LinkStyled = styled.a.withConfig(
    getPropsBlocker,
)<LinkRootPropsType>`
    ${fgColors};
`;

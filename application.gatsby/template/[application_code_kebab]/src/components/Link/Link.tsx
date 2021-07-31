import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import {
    foregroundColor,
    getPropBlocker,
} from '@gannochenko/ui.styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { LinkPropsType } from './type';

const customProps = {
    inner: true,
};

const fgColors = ({ inverted, theme }: LinkPropsType) => {
    if (inverted) {
        return css`
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
            ${foregroundColor(
                theme.palette.text.inverted,
                theme.palette.text.inverted,
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
    getPropBlocker(customProps),
)<LinkPropsType>`
    ${(props: LinkPropsType) => fgColors(props)};
`;

export const LinkStyled = styled.a.withConfig(
    getPropBlocker(customProps),
)<LinkPropsType>`
    ${(props: LinkPropsType) => fgColors(props)};
`;

export const Link: FC<LinkPropsType> = (props) => {
    const { to, href, target } = props;
    const link = to || href || '';

    if (!link.startsWith('/') || target === '_blank') {
        return <LinkStyled {...props} href={link} target="_blank" />;
    }

    return <GatsbyLinkStyled to={link} {...props} />;
};

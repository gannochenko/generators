import React from 'react';
import styled, { css } from 'styled-components';
import { foregroundColor } from '@gannochenko/etc';
import { Link as GatsbyLink } from 'gatsby';
import { FunctionComponent } from 'react';

type PropLinks = {
    to?: string;
    href?: string;
    fontSize?: string;
    bright?: boolean;
    theme?: any;
    target?: string;
    rel?: string;
};

const fgColors = ({ bright, theme }: PropLinks) => {
    if (bright) {
        return css`
            color: white;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        `;
    }

    return foregroundColor(
        theme.color.link.normal,
        theme.color.link.hover,
        theme.link.hoverEffectDuration,
    );
};

export const GatsbyLinkStyled = styled(GatsbyLink)<PropLinks>`
    ${props => fgColors(props)};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSize[fontSize] : 'inherit'};
`;

export const LinkStyled = styled.a<PropLinks>`
    ${props => fgColors(props)};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSize[fontSize] : 'inherit'};
`;

export const Link: FunctionComponent<PropLinks> = props => {
    const { to, href } = props;
    const link = to || href || '';

    if (!link.startsWith('/')) {
        return <LinkStyled {...props} href={link} target="_blank" />;
    }

    return <GatsbyLinkStyled to={link} {...props} />;
};

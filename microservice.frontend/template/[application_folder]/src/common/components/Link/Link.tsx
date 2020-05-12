import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { foregroundColor } from '@gannochenko/etc';
import { Link as RouterLink } from 'react-router-dom';

type PropLinks = {
    to?: string;
    href?: string;
    fontSize?: string;
    inverse?: boolean;
    theme?: any;
    underline?: string;
};

const fgColors = ({ inverse, theme }: PropLinks) => {
    if (inverse) {
        return foregroundColor(theme.palette.white, theme.palette.white);
    }

    return foregroundColor(
        theme.palette.primary.main,
        theme.palette.primary.dark,
        '200ms',
    );
};

const getLinkStyle = ({
    theme,
    underline,
    fontSize,
    inverse,
}: PropLinks) => css`
    ${
        underline === 'hover'
            ? css`
                  text-decoration: none;
                  &:hover {
                      text-decoration: underline;
                  }
              `
            : ''
    }
    font-size: ${fontSize ? theme.typography.fontSize[fontSize] : 'inherit'};
    ${fgColors({ theme, inverse })};
`;

export const RouterLinkStyled = styled(RouterLink)<PropLinks>`
    ${getLinkStyle}
`;

export const LinkStyled = styled.a<PropLinks>`
    ${getLinkStyle}
`;

export const Link: FunctionComponent<PropLinks> = (props) => {
    const { to, href } = props;
    const link = to || href || '';

    if (!link.startsWith('/')) {
        return (
            <LinkStyled
                {...props}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
            />
        );
    }

    return <RouterLinkStyled to={link} {...props} />;
};

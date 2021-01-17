import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { foregroundColor } from '@gannochenko/ui.styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { LinkPropsType } from './type';
import { getPropBlocker } from '../../util/getPropBlocker';

const customProps = {
    inner: true,
};

const fgColors = ({ inner, theme }: LinkPropsType) => {
    if (inner) {
        return css`
            color: inherit;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
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
    const { to, href } = props;
    const link = to || href || '';

    if (!link.startsWith('/')) {
        return <LinkStyled {...props} href={link} target="_blank" />;
    }

    return <GatsbyLinkStyled to={link} {...props} />;
};

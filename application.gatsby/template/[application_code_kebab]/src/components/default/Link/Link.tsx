import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import {
    foregroundColor,
    getPropsBlocker,
} from '@gannochenko/ui.styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { LinkPropsType, LinkRootPropsType } from './type';
import { useLink } from './hooks/useLink';

const fgColors = ({ inverted, theme }: LinkRootPropsType) => {
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
    getPropsBlocker,
)<LinkRootPropsType>`
  ${(props: LinkRootPropsType) => fgColors(props)};
`;

export const LinkStyled = styled.a.withConfig(
    getPropsBlocker,
)<LinkRootPropsType>`
  ${(props: LinkRootPropsType) => fgColors(props)};
`;

export const Link: FC<LinkPropsType> = (props) => {
    const { getLinkProps, getGatsbyLinkProps, newTab } = useLink(props);

    return newTab ? (
        <LinkStyled {...getLinkProps()} />
    ) : (
        <GatsbyLinkStyled {...getGatsbyLinkProps()} />
    );
};

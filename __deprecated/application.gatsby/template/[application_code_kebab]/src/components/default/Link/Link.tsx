import React, { FC } from 'react';
import { LinkStyled, GatsbyLinkStyled } from './style';
import { LinkPropsType } from './type';
import { useLink } from './hooks/useLink';

export const Link: FC<LinkPropsType> = (props) => {
    const { getLinkProps, getGatsbyLinkProps, newTab } = useLink(props);

    return newTab ? (
        <LinkStyled {...getLinkProps()} />
    ) : (
        <GatsbyLinkStyled {...getGatsbyLinkProps()} />
    );
};

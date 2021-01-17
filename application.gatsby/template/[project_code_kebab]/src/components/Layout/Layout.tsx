import React, { FC } from 'react';
import { LayoutRoot, LayoutBody } from './style';
import { LayoutPropsType } from './type';
import { Header, Footer } from '../';
import { CookiePopup } from '../CookiePopup';

export const Layout: FC<LayoutPropsType> = ({ children, props = {} }) => {
    const { location: { pathname = '' } = {} } = props;

    const isRoot = pathname === '/';

    return (
        <LayoutRoot>
            <Header short={!isRoot} />
            <LayoutBody>{children}</LayoutBody>
            <Footer />
            <CookiePopup />
        </LayoutRoot>
    );
};

export default Layout;

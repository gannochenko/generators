import React, { FunctionComponent, useState, useCallback } from 'react';

import {
    MenuRoot,
    Items,
    Item,
    Hamburger,
    Bar,
    Main,
    MobileItems,
    MobileItem,
} from './style';

import { Props } from './type';

export const Menu: FunctionComponent<Props> = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const onHamburgerClick = useCallback(() => {
        setMobileMenuOpen(!mobileMenuOpen);
    }, [mobileMenuOpen, setMobileMenuOpen]);
    const onMobileItemClick = useCallback(() => {
        setMobileMenuOpen(false);
    }, [setMobileMenuOpen]);

    return (
        <MenuRoot>
            <Main>
                <Items>
                    <Item to="/page2">Page 2</Item>
                </Items>
                <Hamburger onClick={onHamburgerClick}>
                    <Bar />
                    <Bar />
                    <Bar />
                </Hamburger>
            </Main>
            <MobileItems open={mobileMenuOpen}>
                <MobileItem to="/page2" onClick={onMobileItemClick}>
                    Page 2
                </MobileItem>
            </MobileItems>
        </MenuRoot>
    );
};

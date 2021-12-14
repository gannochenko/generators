import React, { FC, useState, useCallback } from 'react';

import {
    MenuRoot,
    MenuInnerContainer,
    MenuItems,
    MenuItem,
    MenuHome,
    MenuHamburger,
    MenuHamburgerBarTop,
    MenuHamburgerBarMiddle,
    MenuHamburgerBarBottom,
    MenuRight,
    MenuMobileItems,
    MenuMobileItem,
} from './style';

import { menu } from '../../../menu';
import { site } from '../../../meta/site';

import { MenuPropsType } from './type';
<% if(enable_auth) { %>
import { AuthWidget } from '../AuthWidget';
<% } %>

export const Menu: FC<MenuPropsType> = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const onHamburgerClick = useCallback(() => {
        setMobileMenuOpen(!mobileMenuOpen);
    }, [mobileMenuOpen, setMobileMenuOpen]);
    const onMobileItemClick = useCallback(() => {
        setMobileMenuOpen(false);
    }, [setMobileMenuOpen]);

    return (
        <MenuRoot>
            <MenuInnerContainer>
                <MenuHome to="/" onClick={onMobileItemClick}>
                    {site.logoText}
                </MenuHome>
                <MenuRight>
                    <MenuItems>
                        {menu.map((item) => (
                            <MenuItem to={item.link} key={item.link}>
                                {item.text}
                            </MenuItem>
                        ))}
                    </MenuItems>
<% if(enable_auth) { %>
                    <AuthWidget />
<% } %>
                    {!!menu.length && (
                        <MenuHamburger onClick={onHamburgerClick} open={mobileMenuOpen}>
                            <MenuHamburgerBarTop />
                            <MenuHamburgerBarMiddle />
                            <MenuHamburgerBarBottom />
                        </MenuHamburger>
                    )}
                </MenuRight>
            </MenuInnerContainer>
            <MenuMobileItems open={mobileMenuOpen}>
                {menu.map((item) => (
                    <MenuMobileItem
                        to={item.link}
                        key={item.link}
                        onClick={onMobileItemClick}
                    >
                        {item.text}
                    </MenuMobileItem>
                ))}
            </MenuMobileItems>
        </MenuRoot>
    );
};

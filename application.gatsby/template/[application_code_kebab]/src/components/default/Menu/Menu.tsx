import React, { FC, useState, useCallback } from 'react';

import {
    MenuRoot,
    MenuInnerContainer,
    MenuItems,
    MenuItem,
    MenuHome,
    MenuHamburger,
    MenuBar,
    MenuRight,
    MenuMobileItems,
    MenuMobileItem,
} from './style';

import { menu } from '../../../menu';
import { site } from '../../../meta/site';

import { MenuPropsType } from './type';
import { useMenu } from './hooks/useMenu';

import { AuthWidget } from '../AuthWidget';

export const Menu: FC<MenuPropsType> = () => {
    const { homeProps, hamburgerProps, mobileItemsProps, onMobileItemClick } =
        useMenu();

    return (
        <MenuRoot>
            <MenuInnerContainer>
                <MenuHome {...homeProps}>
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

                    <AuthWidget />

                    {!!menu.length && (
                        <MenuHamburger {...hamburgerProps}>
                            <MenuBar />
                            <MenuBar />
                            <MenuBar />
                        </MenuHamburger>
                    )}
                </MenuRight>
            </MenuInnerContainer>
            <MenuMobileItems {...mobileItemsProps}>
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

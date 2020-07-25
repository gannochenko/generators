import React, { FunctionComponent, useState, useCallback } from 'react';
import { menu } from '../../menu';

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
                    {menu.map((item) => (
                        <Item to={item.link} key={item.link}>
                            {item.text}
                        </Item>
                    ))}
                </Items>
                <Hamburger onClick={onHamburgerClick}>
                    <Bar />
                    <Bar />
                    <Bar />
                </Hamburger>
            </Main>
            <MobileItems open={mobileMenuOpen}>
                {menu.map((item) => (
                    <MobileItem to={item.link} onClick={onMobileItemClick}>
                        {item.text}
                    </MobileItem>
                ))}
            </MobileItems>
        </MenuRoot>
    );
};

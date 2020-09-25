import React, { FunctionComponent, useState, useCallback } from 'react';

import {
    MenuContainer,
    InnerContainer,
    Items,
    Item,
    Home,
    Hamburger,
    Bar,
    Right,
    MobileItems,
    MobileItem,
} from './style';

import { items } from './items';

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
        <MenuContainer>
            <InnerContainer>
                <Home to="/" onClick={onMobileItemClick} />
                <Right>
                    <Items>
                        {items.map(item => <Item to={item.link} key={item.link}>{item.text}</Item>)}
                    </Items>
                    <Hamburger onClick={onHamburgerClick}>
                        <Bar />
                        <Bar />
                        <Bar />
                    </Hamburger>
                </Right>
            </InnerContainer>
            <MobileItems open={mobileMenuOpen}>
                {items.map(item => (
                    <MobileItem to={item.link} onClick={onMobileItemClick}>
                        {item.text}
                    </MobileItem>
                ))}
            </MobileItems>
        </MenuContainer>
    );
};

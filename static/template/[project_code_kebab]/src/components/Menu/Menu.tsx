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
<% if (use_blog) { %>
                        <Item to="/blog">Blog</Item>
<% } %>
<% if (no_blog) { %>
                        <Item to="/content">Content</Item>
<% } %>
                    </Items>
                    <Hamburger onClick={onHamburgerClick}>
                        <Bar />
                        <Bar />
                        <Bar />
                    </Hamburger>
                </Right>
            </InnerContainer>
            <MobileItems open={mobileMenuOpen}>
<% if (use_blog) { %>
                <MobileItem to="/blog" onClick={onMobileItemClick}>
                    Blog
                </MobileItem>
<% } %>
<% if (no_blog) { %>
                <MobileItem to="/content" onClick={onMobileItemClick}>
                    Content
                </MobileItem>
<% } %>
            </MobileItems>
        </MenuContainer>
    );
};

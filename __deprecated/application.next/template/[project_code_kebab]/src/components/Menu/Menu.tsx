import { FunctionComponent, useState, useCallback } from 'react';
import Link from 'next/link';
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
                        <Link href={item.link} key={item.link}>
                            <Item href={item.link}>{item.text}</Item>
                        </Link>
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
                    <Link href={item.link} key={item.link}>
                        <MobileItem
                            onClick={onMobileItemClick}
                            href={item.link}
                        >
                            {item.text}
                        </MobileItem>
                    </Link>
                ))}
            </MobileItems>
        </MenuRoot>
    );
};

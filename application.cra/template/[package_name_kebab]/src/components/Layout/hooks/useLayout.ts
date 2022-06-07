import { Link } from 'react-router-dom';

import { LayoutPropsType, MenuItemType } from '../type';

const menuItems: MenuItemType[] = [
    {
        text: 'Subpage',
        href: '/subpage',
    },
];

export const useLayout = (props: LayoutPropsType) => {
    const handleLinkClick = (name: any) => {};

    return {
        titleProps: {
            tag: Link,
            to: '/',
        },
        linksProps: {
            onLinkClick: handleLinkClick,
        },
        getMenuItemProps: ({ text, href }: MenuItemType) => ({
            name: text,
            isActive: false,
            to: href,
            tag: Link,
        }),
        menuItems,
    };
};

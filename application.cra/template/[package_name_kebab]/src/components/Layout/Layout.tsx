import { FC } from 'react';

import { LayoutPropsType } from './type';
import { useLayout } from './hooks/useLayout';

export const Layout: FC<LayoutPropsType> = ({ children, ...props }) => {
    const { titleProps, linksProps, getMenuItemProps, menuItems } =
        useLayout(props);

    return (
        <Box paddingBottom={10}>
            <HeaderNavigation
                title={
                    <HeaderNavigationTitle {...titleProps}>
                        Application, the&reg;
                    </HeaderNavigationTitle>
                }
                links={
                    <HeaderNavigationLinks {...linksProps}>
                        {menuItems.map((menuItem) => (
                            <HeaderNavigationLink
                                key={menuItem.href}
                                {...getMenuItemProps(menuItem)}
                            >
                                {menuItem.text}
                            </HeaderNavigationLink>
                        ))}
                    </HeaderNavigationLinks>
                }
                // search={<HeaderNavigationSearch {...searchProps} />}
            />
            {children}
        </Box>
    );
};

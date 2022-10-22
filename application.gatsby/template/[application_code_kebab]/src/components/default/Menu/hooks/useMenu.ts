import { useCallback, useState } from 'react';

export const useMenu = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const onHamburgerClick = useCallback(() => {
        setMobileMenuOpen(!mobileMenuOpen);
    }, [mobileMenuOpen, setMobileMenuOpen]);
    const onMobileItemClick = useCallback(() => {
        setMobileMenuOpen(false);
    }, [setMobileMenuOpen]);

    return {
        homeProps: {
            onClick: onMobileItemClick,
            to: '/',
        },
        hamburgerProps: {
            onClick: onHamburgerClick,
        },
        mobileItemsProps: {
            open: mobileMenuOpen,
        },
        onMobileItemClick,
    };
};

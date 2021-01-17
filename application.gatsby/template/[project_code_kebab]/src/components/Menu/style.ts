import styled from 'styled-components';
import { Link } from 'gatsby';
import {
    muiTypography,
    muiColor,
    muiSpacing,
    muiBreakpointDown,
    muiBreakpointUp,
    contentAlignment,
    gutter,
} from '@gannochenko/ui.styled-components';

import { Container } from '../Container';

export const MenuRoot = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${muiColor('primary.main')};
    z-index: 1000;
    box-shadow: 0px 6px 30px -8px rgba(0, 0, 0, 0.55);
`;

export const MenuInnerContainer = styled(Container)`
    ${contentAlignment('center', 'center')};
    justify-content: space-between;
    position: relative;
`;

export const MenuItems = styled.nav`
    ${gutter(undefined, '1rem')}
    ${contentAlignment('right', 'center')}
    ${muiBreakpointDown('xs')} {
        display: none;
    }
`;

export const MenuHome = styled(Link)`
    ${contentAlignment('center', 'center')}
    ${muiTypography('caption')};
    font-weight: bold;
    &:before {
        content: 'Income Bowls';
    }

    color: ${muiColor('primary.contrastText')};
    &:active,
    &:focus {
        color: ${muiColor('primary.contrastText')};
    }
    text-decoration: none;
    flex-shrink: 0;
    height: ${muiSpacing(10)};
`;

export const MenuItem = styled(Link)`
    color: ${muiColor('primary.contrastText')};
    ${muiTypography('caption')};
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    padding-bottom: ${muiSpacing(0.5)};

    &:after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        background-color: ${muiColor('primary.contrastText')};
        transition: width ease 200ms;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`;

export const MenuRight = styled.div`
    ${contentAlignment('center', 'center')};
    flex-shrink: 0;
    position: relative;
`;

export const MenuHamburger = styled.div`
    ${contentAlignment('center', 'center', 'column')};
    width: ${muiSpacing(10)};
    height: ${muiSpacing(10)};
    ${gutter('0.2rem')};
    padding: ${muiSpacing(2)};
    cursor: pointer;
    ${muiBreakpointUp('sm')} {
        display: none;
    }
`;

export const MenuBar = styled.div`
    background-color: ${muiColor('background.default')};
    height: ${muiSpacing(2.5)};
    width: 100%;
    display: block;
`;

export const MenuMobileItems = styled.nav<{ open: boolean }>`
    background-color: ${muiColor('background.default')};
    position: absolute;
    top: 100%;
    right: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: right ease 200ms;
`;

export const MenuMobileItem = styled(Link)`
    padding: ${muiSpacing(4)} ${muiSpacing(8)};
    position: relative;
    display: block;
    text-decoration: none;
    color: ${muiColor('text.primary')};
    border-bottom: 1px solid ${muiColor('divider')};

    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: ${muiColor('primary.main')};
        transition: width 200ms ease;
    }

    &:hover {
        &:before {
            width: ${muiSpacing(2.5)};
        }
    }
`;

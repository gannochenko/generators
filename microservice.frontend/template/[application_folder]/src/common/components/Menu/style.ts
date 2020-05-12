import styled from 'styled-components';
import { align, gap, foregroundColor } from '@gannochenko/etc';
import { Link } from 'react-router-dom';

export const MenuRoot = styled.div`
    height: 100%;
    display: flex;
    align-items: stretch;
`;

export const Items = styled.nav`
    ${gap(null, '1rem')};
    ${align('center', 'right')};
    ${({ theme }) => ({
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    })}
`;

export const Item = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    font-weight: bold;
    ${({ theme }) => foregroundColor(theme.palette.white, theme.palette.white)};

    &:after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        background-color: ${(props) => props.theme.palette.white};
        transition: width ease 200ms;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`;

export const Main = styled.div`
    ${align('center', 'center')};
    flex-shrink: 0;
    position: relative;
    display: flex;
    align-items: center;
`;

export const Hamburger = styled.div`
    ${align('center', 'center', 'column')};
    width: 2.5rem;
    height: 2.5rem;
    ${gap('0.3rem', null)};
    padding: 0.5rem;
    cursor: pointer;
    ${({ theme }) => ({
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    })}
`;

export const Bar = styled.div`
    background-color: ${(props) => props.theme.palette.white};
    height: 5px;
    width: 100%;
    display: block;
`;

export const MobileItems = styled.nav<{ open: boolean }>`
    background-color: ${(props) => props.theme.palette.white};
    position: absolute;
    top: 100%;
    right: ${(props) => (props.open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: right ease 200ms;
    z-index: ${({ theme }) => theme.zIndex.appBar};
    ${({ theme }) => ({
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    })}
`;

export const MobileItem = styled(Link)`
    padding: 1rem 2rem;
    position: relative;
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.palette.main};
    border-bottom: 1px solid ${(props) => props.theme.palette.main};

    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.palette.main};
        transition: width 200ms ease;
    }

    &:hover {
        &:before {
            width: 10px;
        }
    }
`;

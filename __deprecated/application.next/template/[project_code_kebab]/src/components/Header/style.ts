import styled from 'styled-components';
import { backgroundCover, foregroundColor } from '../../styles/mixins';
import { Container } from '../Container';
import { HeaderRootPropsType } from './type';
import { ThemePropsType } from '../../styles/type';

const logo = require('./assets/logo.png') as string;

export const HeaderRoot = styled.header<HeaderRootPropsType>`
    height: 3rem;
`;

export const HeaderBar = styled.div<ThemePropsType>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.grey['800']};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    box-shadow: 0px 6px 30px -8px rgba(0, 0, 0, 0.55);
    z-index: ${({ theme }) => theme.zIndex.appBar};
    min-height: 3rem;
    display: flex;
    align-items: stretch;
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export const Left = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: flex-end;
`;

export const Logo = styled.div<ThemePropsType>`
    ${({ theme }) =>
        foregroundColor(
            theme.palette.background.default,
            theme.palette.background.default,
        )};
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:before {
        content: '';
        ${backgroundCover(logo)};
        width: 2rem;
        height: 2rem;
        display: block;
        margin-right: 1rem;
    }
`;

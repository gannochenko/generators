import React, { FunctionComponent } from 'react';

import {
    HeaderRoot,
    HeaderBar,
    HeaderContainer,
    Left,
    Right,
    Logo,
} from './style';
import { HeaderPropsType } from './type';
import { Menu } from '../Menu';

export const Header: FunctionComponent<HeaderPropsType> = ({
    ...restProps
}) => {
    return (
        <HeaderRoot {...restProps}>
            <HeaderBar>
                <HeaderContainer>
                    <Left>
                        <Logo to="/">Rasp Dashboard</Logo>
                    </Left>
                    <Right>
                        <Menu />
                    </Right>
                </HeaderContainer>
            </HeaderBar>
        </HeaderRoot>
    );
};

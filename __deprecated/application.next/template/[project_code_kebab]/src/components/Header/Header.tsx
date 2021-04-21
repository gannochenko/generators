import { FunctionComponent } from 'react';
import Link from 'next/link';
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
                        <Link href="/">
                            <Logo />
                        </Link>
                    </Left>
                    <Right>
                        <Menu />
                    </Right>
                </HeaderContainer>
            </HeaderBar>
        </HeaderRoot>
    );
};

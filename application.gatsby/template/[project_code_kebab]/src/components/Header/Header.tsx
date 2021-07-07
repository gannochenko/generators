import React, { FC, FunctionComponent } from 'react';
import { Query } from './query';
import { HeaderPropsType } from './type';
import { Menu } from '../Menu';
import {
    MenuOffset,
    HeaderRoot,
} from './style';

export const Header: FunctionComponent<HeaderPropsType> = () => (
    <HeaderRoot>
        <MenuOffset />
        <Menu />
    </HeaderRoot>
);

const HeaderWithQuery: FC<Pick<HeaderPropsType, 'inner'>> = (props) => {
    return (
        <Query>
            {data => (
                <Header
                    {...props}
                    backgroundImage={data.backgroundImage}
                />
            )}
        </Query>
    );
};

export default HeaderWithQuery;

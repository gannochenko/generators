import React, { FC, FunctionComponent } from 'react';
import { Query } from './query';
import { HeaderPropsType } from './type';
import { Menu } from '../Menu';
import {
    MenuOffset,
    HeaderMainContainer,
} from './style';

export const Header: FunctionComponent<HeaderPropsType> = () => (
    <HeaderMainContainer>
        <MenuOffset />
        <Menu />
    </HeaderMainContainer>
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

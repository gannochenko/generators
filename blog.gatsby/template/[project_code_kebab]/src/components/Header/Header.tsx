import React, { FunctionComponent } from 'react';
import { Query } from './query';
import { Props } from './type';
import { HeaderMain } from './components/HeaderMain';

export const Header: FunctionComponent<Props> = ({ short }) => {
    return (
        <Query>
            {data => (
                <HeaderMain
                    backgroundImage={data.backgroundImage}
                    inner={short}
                />
            )}
        </Query>
    );
};

export default Header;

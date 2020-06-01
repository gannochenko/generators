import React, { FunctionComponent } from 'react';

import { Props } from './type';
import { Menu } from '../../../Menu';
import {
    MenuOffset,
    HeaderMainContainer,
} from './style';

export const HeaderMain: FunctionComponent<Props> = () => (
    <HeaderMainContainer>
        <MenuOffset />
        <Menu />
    </HeaderMainContainer>
);

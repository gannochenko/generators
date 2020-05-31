import React, { FunctionComponent } from 'react';

import { ButtonRoot } from './style';
import { ButtonPropsType } from './type';

export const Button: FunctionComponent<ButtonPropsType> = ({
    children,
    ...restProps
}) => {
    return <ButtonRoot {...restProps}>{children}</ButtonRoot>;
};

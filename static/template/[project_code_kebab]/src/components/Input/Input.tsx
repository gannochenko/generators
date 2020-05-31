import React, { FunctionComponent } from 'react';

import { InputRoot } from './style';
import { InputPropsType } from './type';

export const Input: FunctionComponent<InputPropsType> = ({
    children,
    ...restProps
}) => {
    return <InputRoot {...restProps}>{children}</InputRoot>;
};

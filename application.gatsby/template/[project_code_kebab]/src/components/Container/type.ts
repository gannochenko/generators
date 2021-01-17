import { HTMLAttributes } from 'react';
import { BreakpointNameType } from '../../style/type';
import { ObjectLiteralType } from '../../type';

export type ContainerPropsType = Partial<{
    // custom props here

    maxWidth: false | BreakpointNameType;
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

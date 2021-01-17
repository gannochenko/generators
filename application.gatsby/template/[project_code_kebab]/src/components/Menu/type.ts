import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';

export type MenuPropsType = Partial<{
    // custom props here
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

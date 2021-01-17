import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';

export type EmailPropsType = Partial<{
    // custom props here
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

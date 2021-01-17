import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';

export type CookiePopupPropsType = Partial<{
    // custom props here
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

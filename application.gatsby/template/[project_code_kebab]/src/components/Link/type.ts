import { AnchorHTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';

export type LinkPropsType = Partial<{
    to: string;
    inner: boolean;
}> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    ObjectLiteralType;

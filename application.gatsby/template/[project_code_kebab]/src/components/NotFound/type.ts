import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';

export type NotFoundFramePropsType = Partial<{
    // custom props here
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

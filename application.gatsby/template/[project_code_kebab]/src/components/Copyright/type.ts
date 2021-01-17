import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';

export type CopyrightPropsType = Partial<{
    // custom props here

    author: string;
    source: string;
    sourceText: string;
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

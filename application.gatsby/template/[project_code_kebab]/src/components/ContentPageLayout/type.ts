import { HTMLAttributes } from 'react';
import { ContentRecordType, ObjectLiteralType } from '../../type';

export type ContentPageLayoutPropsType = {
    // custom props here

    data: {
        mdx: ContentRecordType;
    };
    path: string;
} & HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

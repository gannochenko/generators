import { HTMLAttributes } from 'react';
import { ContentRecordType } from '../../../type';

export type <%- content_name_pascal %>DetailPropsType = {
    // custom props here

    data: {
        mdx: ContentRecordType;
    };
    path: string;
} & HTMLAttributes<HTMLElement>;

import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';

export type SEOPropsType = Partial<{
    // custom props here

    description: string;
    lang: string;
    meta: Meta[];
    keywords: string[] | string;
    title: string;
    image: string;
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

export interface Meta {
    name: string;
    content: string;
}

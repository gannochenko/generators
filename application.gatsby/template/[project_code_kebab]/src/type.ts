import { ReactNode } from 'react';

export interface ObjectLiteralType<P = any> {
    [k: string]: P;
}

export type ScalarType = string | number;

export interface Graphics {
    source?: string;
    author?: string;
    image: any;
}

export interface Node {
    id: string;
    html: string;
    rawMarkdownBody: string;
    frontmatter: {
        graphics: Graphics[];
    };
}

export interface QueryProps {
    children: (data: any) => ReactNode;
}

export type ContentRecordType = {
    frontmatter: {
        title: string;
        backUrl?: string;
        keywords?: string[] | string;
        description?: string;
        images?: any[];
        path?: string;
        displayPageTitle?: boolean;
    } & ObjectLiteralType;
    body: string;
    id: string;
};

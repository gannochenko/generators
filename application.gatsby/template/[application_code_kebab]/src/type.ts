import { ReactNode } from 'react';

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
        kind: string;
        title: string;
        slug: string;
        backUrl?: string;
        keywords?: string[] | string;
        description?: string;
        images?: ContentRecordImageType[];
        displayPageTitle?: boolean;
    } & Record<string, unknown>;
    body: string;
    id: string;
};

export type ContentRecordImageType = {
    author?: string;
    source?: string;
    sourceText?: string;
    isCover?: boolean;
    image: {
        childImageSharp: Record<string, unknown>;
    } | null;
};

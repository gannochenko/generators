import { ReactNode } from 'react';

export interface QueryProps {
    children: (data: any) => ReactNode;
}

export interface ObjectLiteral<P = any> {
    [k: string]: P;
}

export type Nullable<P> = P | null;

<% if(use_blog) { %>
export type ContentRecordImageType = {
    author?: string;
    source?: string;
    sourceText?: string;
    is_cover?: boolean;
    image: Nullable<{
        childImageSharp: ObjectLiteral;
    }>;
};
<% } %>

export type ContentRecordType = {
    frontmatter: {
<% if(use_blog) { %>
        images: ContentRecordImageType[];
        title: string;
        date: string;
        backUrl?: string;
        keywords?: string[];
        description?: string;
        published?: boolean;
<% } %>
        show_title?: boolean;
        path?: string;
    } & ObjectLiteral;
    body: string;
    id: string;
};

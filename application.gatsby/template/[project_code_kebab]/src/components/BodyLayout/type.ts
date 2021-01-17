import { HTMLAttributes } from 'react';
import { ContentRecordType, ObjectLiteralType } from '../../type';

export type BodyLayoutPropsType = Partial<{
    // custom props here

    title: ContentRecordType['frontmatter']['title'];
    keywords: ContentRecordType['frontmatter']['keywords'];
    description: ContentRecordType['frontmatter']['description'];

    location: {
        pathname: string;
    };
    pageContext: ContentRecordType;
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

import { HTMLAttributes } from 'react';
import { ContentRecordType } from '../../../type';

export type PageLayoutPropsType = Partial<{
    title: ContentRecordType['frontmatter']['title'];
    keywords: ContentRecordType['frontmatter']['keywords'];
    description: ContentRecordType['frontmatter']['description'];
    displayPageTitle: boolean;
    location: {
        pathname: string;
    };
    pageContext: ContentRecordType;
}> &
    HTMLAttributes<HTMLElement>;

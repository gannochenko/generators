import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';
import { ContentRecordType } from '../../type';

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

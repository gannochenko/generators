import { ReactNode } from 'react';
import { ContentRecordType } from '../../type';

export interface Props {
    children?: ReactNode;
    location: {
        pathname: string;
    };
    pageContext: ContentRecordType;
    showTitle?: boolean;
}

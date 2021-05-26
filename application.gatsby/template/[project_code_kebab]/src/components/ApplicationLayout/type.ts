import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';

export type LayoutPropsType = Partial<{
    // custom props here

    props: {
        location: {
            pathname: string;
        };
    };
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

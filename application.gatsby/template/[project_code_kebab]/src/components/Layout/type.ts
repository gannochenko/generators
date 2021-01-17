import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';

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

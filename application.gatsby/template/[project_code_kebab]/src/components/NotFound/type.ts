import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';

export type NotFoundFramePropsType = Partial<{
    // custom props here
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

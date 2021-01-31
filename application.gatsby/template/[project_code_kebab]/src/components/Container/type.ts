import { HTMLAttributes } from 'react';
import { ObjectLiteralType, BreakpointNameType } from '@gannochenko/ui.styled-components';

export type ContainerPropsType = Partial<{
    // custom props here

    maxWidth: false | BreakpointNameType;
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

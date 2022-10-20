import { HTMLAttributes } from 'react';
import { BreakpointNameType } from '@gannochenko/ui.emotion';

export type ContainerPropsType = Partial<{
    // custom props here

    maxWidth: false | BreakpointNameType;
}> &
    HTMLAttributes<HTMLElement>;

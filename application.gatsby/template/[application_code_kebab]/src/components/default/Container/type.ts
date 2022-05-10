import { HTMLAttributes } from 'react';
import { BreakpointNameType, HeightPropsType } from '@gannochenko/ui.emotion';

export type ContainerPropsType = Partial<{
    maxWidth: false | BreakpointNameType;
}> &
    HeightPropsType &
    HTMLAttributes<HTMLElement>;

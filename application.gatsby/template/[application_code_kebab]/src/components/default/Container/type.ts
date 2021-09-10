import { HTMLAttributes } from 'react';
import {
    BreakpointNameType,
} from '@gannochenko/ui.styled-components';

export type ContainerPropsType = Partial<{
    // custom props here

    maxWidth: false | BreakpointNameType;
}> &
    HTMLAttributes<HTMLElement>;

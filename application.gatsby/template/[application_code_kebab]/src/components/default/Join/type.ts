import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';

export type JoinPropsType = HTMLAttributes<HTMLDivElement> & {
    token: string;
    email: string;
} & MarginPropsType;

export type JoinRootPropsType = StylePropsType;

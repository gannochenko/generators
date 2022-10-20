import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';

export type MainHeaderPropsType = HTMLAttributes<HTMLDivElement> &
    MarginPropsType;

export type MainHeaderRootPropsType = StylePropsType;

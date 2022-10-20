import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';

export type CategoriesPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        // put your custom props here
    }> &
    MarginPropsType;

export type CategoriesRootPropsType = StylePropsType & CategoriesPropsType;

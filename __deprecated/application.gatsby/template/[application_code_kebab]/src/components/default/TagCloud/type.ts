import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';

export type TagCloudPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        tags: string[];
        // put your custom props here
    }> &
    MarginPropsType;

export type TagCloudRootPropsType = StylePropsType & TagCloudPropsType;

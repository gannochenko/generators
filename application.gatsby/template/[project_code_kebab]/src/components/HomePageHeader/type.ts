import { HTMLAttributes } from 'react';
import { StylePropsType, ObjectLiteralType, MarginPropsType } from '@gannochenko/ui.styled-components';

export type HomePageHeaderPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type HomePageHeaderRootPropsType = StylePropsType;

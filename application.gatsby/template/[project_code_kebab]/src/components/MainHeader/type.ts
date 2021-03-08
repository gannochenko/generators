import { HTMLAttributes } from 'react';
import { StylePropsType, ObjectLiteralType, MarginPropsType } from '@gannochenko/ui.styled-components';

export type MainHeaderPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type MainHeaderRootPropsType = StylePropsType & MainHeaderPropsType;

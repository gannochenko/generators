import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    MarginPropsType,
} from '@gannochenko/ui.styled-components';

export type <%- content_name_pascal %>ListPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        data: Record<string, any>[];
        // put your custom props here
    }> &
    MarginPropsType;

export type <%- content_name_pascal %>ListRootPropsType = StylePropsType & <%- content_name_pascal %>ListPropsType;

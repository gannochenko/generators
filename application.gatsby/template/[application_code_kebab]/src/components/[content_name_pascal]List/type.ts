import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    ObjectLiteralType,
    MarginPropsType,
} from '@gannochenko/ui.styled-components';

export type <%- content_name_pascal %>ListPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        data: ObjectLiteralType[];
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type <%- content_name_pascal %>ListRootPropsType = StylePropsType & <%- content_name_pascal %>ListPropsType;

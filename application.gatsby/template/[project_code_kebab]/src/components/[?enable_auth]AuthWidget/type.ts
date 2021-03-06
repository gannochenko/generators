import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    ObjectLiteralType,
    MarginPropsType,
} from '@gannochenko/ui.styled-components';

export type AuthWidgetPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type AuthWidgetRootPropsType = StylePropsType & AuthWidgetPropsType;

// export type AuthWidgetInnerNodePropsType = StylePropsType & ObjectLiteralType;

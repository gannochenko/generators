import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';

export type <%- component_name_pascal %>PropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        // put your custom props here
    }> &
    MarginPropsType;

export type <%- component_name_pascal %>RootPropsType = StylePropsType & <%- component_name_pascal %>PropsType;

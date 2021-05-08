import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    MarginPropsType,
} from '@gannochenko/ui.styled-components';

export type ContactsPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        // put your custom props here
    }> &
    MarginPropsType;

export type ContactsRootPropsType = StylePropsType & ContactsPropsType;

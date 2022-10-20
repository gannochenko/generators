import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';
import { ObjectEditorPropsGenericType } from '../type';

export type ObjectEditorPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        onDataChange: () => void;
    }> &
    Pick<ObjectEditorPropsGenericType, 'objectId' | 'data'> &
    MarginPropsType;

export type ObjectEditorRootPropsType = StylePropsType & ObjectEditorPropsType;

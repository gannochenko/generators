import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';

import { ObjectEditorPropsGenericType } from '../type';

export type ObjectEditorButtonsPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        showToggleEditModeButton: boolean;
        onToggleEditMode: () => void;
        onDataChange: () => void;
    }> &
    ObjectEditorPropsGenericType &
    MarginPropsType;

export type ObjectEditorButtonsRootPropsType = StylePropsType &
    HTMLAttributes<HTMLDivElement>;

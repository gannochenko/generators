import React, { FC } from 'react';

import { ObjectEditorButtonsPropsType } from './type';
import { ObjectEditorButtonsRoot } from './style';
import { useObjectEditorButtons } from './hooks/useObjectEditorButtons';
import { Button } from '@mui/material';

export const ObjectEditorButtons: FC<ObjectEditorButtonsPropsType> = (
    props,
) => {
    const {
        rootProps,
        visible,
        editModeToggleButtonProps,
        editor,
        showToggleEditModeButton,
    } = useObjectEditorButtons(props);

    if (!visible) {
        return null;
    }

    return (
        <ObjectEditorButtonsRoot {...rootProps}>
            {showToggleEditModeButton && (
                <Button {...editModeToggleButtonProps} variant="contained">
                    Режим редактирования
                </Button>
            )}
            {editor}
        </ObjectEditorButtonsRoot>
    );
};

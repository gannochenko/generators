import React, { FC } from 'react';

import { ObjectEditorPropsType } from './type';
import { useObjectEditor } from './hooks/useObjectEditor';
import { FileUploader } from '../FileUploader';

export const ObjectEditor: FC<ObjectEditorPropsType> = (props) => {
    const { fileUploaderProps } = useObjectEditor(props);

    return (
        <>
            <FileUploader {...fileUploaderProps} />
        </>
    );
};

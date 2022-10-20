import React, { FC } from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { FileUploaderFilePropsType } from './type';
import {
    FileUploaderFileRoot,
    FileUploaderFileDeleteIcon,
    FileUploaderFileDeleteIconText,
    FileUploaderFileSpinnerContainer,
} from './style';
import { useFileUploaderFile } from './hooks/useFileUploaderFile';
import { CircularProgress } from '@mui/material';

export const FileUploaderFile: FC<FileUploaderFilePropsType> = (props) => {
    const {
        rootProps,
        showDeleteButton,
        showLoadingSpinner,
        deleteButtonProps,
        getSpinnerProps,
    } = useFileUploaderFile(props);

    return (
        <FileUploaderFileRoot {...rootProps}>
            {showLoadingSpinner && (
                <FileUploaderFileSpinnerContainer>
                    <CircularProgress
                        variant="determinate"
                        {...getSpinnerProps()}
                    />
                </FileUploaderFileSpinnerContainer>
            )}
            {showDeleteButton && (
                <FileUploaderFileDeleteIcon
                    className="FileUploaderFileRoot--DeleteIcon"
                    {...deleteButtonProps}
                >
                    <RemoveCircleIcon />
                    <FileUploaderFileDeleteIconText>
                        Удалить файл
                    </FileUploaderFileDeleteIconText>
                </FileUploaderFileDeleteIcon>
            )}
        </FileUploaderFileRoot>
    );
};

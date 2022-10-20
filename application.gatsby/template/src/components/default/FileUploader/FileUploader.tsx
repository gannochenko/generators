import React, { FC } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    LinearProgress,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

import { FileUploaderPropsType } from './type';
import {
    FileUploaderRoot,
    FileUploaderFiles,
    FileUploaderActions,
    FileUploaderActionButtons,
    FileSelectorButton,
    DragDropZoneIndicator,
    CloseDialogButton,
} from './style';
import { FileUploaderFile } from './FileUploaderFile';
import { useFileUploader } from './hooks/useFileUploader';

export const FileUploader: FC<FileUploaderPropsType> = (props) => {
    const {
        rootProps,
        dialogProps,
        fileInputProps,
        fileSelectorProps,
        selectedFiles,
        startButtonProps,
        getFileProps,
        fileListProps,
        showDragDropIndicator,
        progressProps,
        closeDialogButtonProps,
        t,
    } = useFileUploader(props);

    return (
        <FileUploaderRoot {...rootProps}>
            <Dialog {...dialogProps}>
                <CloseDialogButton
                    {...closeDialogButtonProps}
                    variant="contained"
                    color="primary"
                >
                    <CloseIcon />
                </CloseDialogButton>
                <DialogTitle>{t('FileUploader.title')}</DialogTitle>
                <DialogContent>
                    <FileUploaderFiles {...fileListProps}>
                        {selectedFiles.map((file) => (
                            <FileUploaderFile
                                key={file.id}
                                {...getFileProps(file)}
                            />
                        ))}
                        <FileSelectorButton {...fileSelectorProps}>
                            <AddCircleOutlineIcon fontSize="inherit" />
                        </FileSelectorButton>
                        {showDragDropIndicator && <DragDropZoneIndicator />}
                    </FileUploaderFiles>
                    <FileUploaderActions>
                        <LinearProgress {...progressProps} />
                        <FileUploaderActionButtons>
                            <Button variant="contained" {...startButtonProps}>
                                {t('FileUploader.uploadStart')}
                            </Button>
                        </FileUploaderActionButtons>
                    </FileUploaderActions>
                    <input {...fileInputProps} />
                </DialogContent>
            </Dialog>
        </FileUploaderRoot>
    );
};

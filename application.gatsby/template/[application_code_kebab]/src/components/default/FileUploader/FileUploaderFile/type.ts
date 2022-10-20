import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';
import { SelectedFileType } from '../type';

export type FileUploaderFilePropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        loading: boolean;
        progress: number;
        file: SelectedFileType;
        onDeleteFileClick: () => void;
        // put your custom props here
    }> &
    MarginPropsType;

export type FileUploaderFileRootPropsType = StylePropsType & {
    filePreview: string;
} & HTMLAttributes<HTMLDivElement>;

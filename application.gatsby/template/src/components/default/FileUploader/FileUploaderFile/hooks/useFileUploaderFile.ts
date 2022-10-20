import { FileUploaderFilePropsType } from '../type';

export const useFileUploaderFile = <E extends HTMLDivElement>({
    loading,
    progress,
    onDeleteFileClick,
    file,
    ...props
}: FileUploaderFilePropsType) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            filePreview: file?.preview ?? '',
        },
        showDeleteButton: !loading,
        showLoadingSpinner: !!loading,
        getLoadingSpinnerProps: () => {},
        deleteButtonProps: {
            onClick: onDeleteFileClick,
        },
        getSpinnerProps: () => ({
            value: progress ?? 0,
        }),
    };
};

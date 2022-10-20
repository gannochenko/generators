import { useEffect, useState } from 'react';
import { ObjectEditorPropsType } from '../type';
import { eventBus } from '../../../../util/eventBus';
import { EventsEnum } from '../../../../util/events';

export const useObjectEditor = <E extends HTMLDivElement>({
    objectId,
    onDataChange,
}: ObjectEditorPropsType) => {
    const [fileUploaderOpen, setFileUploaderOpen] = useState(false);

    useEffect(() => {
        const callback = () => {
            setFileUploaderOpen(true);
        };
        eventBus.on(EventsEnum.OBJECT_EDITOR_FILE_UPLOADER_TOGGLE, callback);

        return () =>
            eventBus.off(
                EventsEnum.OBJECT_EDITOR_FILE_UPLOADER_TOGGLE,
                callback,
            );
    }, []);

    return {
        fileUploaderProps: {
            open: fileUploaderOpen,
            onOpenChange: () => setFileUploaderOpen(false),
            onUploadComplete: () => {
                setFileUploaderOpen(false);
                onDataChange?.();
            },
            objectId,
        },
    };
};

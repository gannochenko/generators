import { HTMLAttributes } from 'react';
import { MessageRecordWithRefType } from '@gannochenko/ui';

export type NotificationUIPropsType = {
    messages: MessageRecordWithRefType[];
    onCloseMessage: (id: number) => void;
} & HTMLAttributes<HTMLElement>;

export type MessageIconType = 'info' | 'error' | 'offline' | 'confirm';

export type MessageIcon = {
    icon?: string;
    type?: MessageIconType;
};

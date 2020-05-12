import React, { FunctionComponent } from 'react';

import {
    NotificationUIRoot,
    MessageWrap,
    MessageGap,
    Message,
    Text,
    Close,
} from './style';
import { MessageIconType, NotificationUIPropsType } from './type';

export const NotificationUI: FunctionComponent<NotificationUIPropsType> = ({
    messages,
    onCloseMessage,
}) => {
    return (
        <NotificationUIRoot>
            {messages.map((message) => (
                <MessageWrap
                    key={message.id}
                    ref={message.ref}
                    closing={message.closing}
                >
                    <MessageGap>
                        <Message>
                            <Text
                                type={message.type as MessageIconType}
                                icon={message.icon}
                            >
                                {message.text}
                            </Text>
                            {message.closeable && (
                                <Close
                                    onClick={() => onCloseMessage(message.id)}
                                />
                            )}
                        </Message>
                    </MessageGap>
                </MessageWrap>
            ))}
        </NotificationUIRoot>
    );
};

import React, { FunctionComponent, useEffect, useState } from 'react';

import { EmailRoot } from './style';
import { EmailPropsType } from './type';

export const Email: FunctionComponent<EmailPropsType> = ({ ...restProps }) => {
    const [email, setEmail] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setEmail('<%- author_email_start %>');
        }, 500);
    }, []);

    if (!email) {
        return null;
    }

    return <EmailRoot {...restProps}>{email}@<%- author_email_end %></EmailRoot>;
};

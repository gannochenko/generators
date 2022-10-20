import React, { FC, useEffect, useState } from 'react';
import { emailFirstPart, emailSecondPart } from '../../../meta/email';

import { EmailRoot } from './style';
import { EmailPropsType } from './type';

export const Email: FC<EmailPropsType> = ({ ...restProps }) => {
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setEmail(emailFirstPart);
        }, 500);
        setTimeout(() => {
            setDomain(emailSecondPart);
        }, 700);
    }, []);

    if (!email || !domain) {
        return null;
    }

    return <EmailRoot {...restProps}>{email}@{domain}</EmailRoot>;
};

import React, { FC, useEffect, useState } from 'react';

import { EmailRoot } from './style';
import { EmailPropsType } from './type';

export const Email: FC<EmailPropsType> = ({ ...restProps }) => {
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setEmail('gannochenko.sv');
        }, 500);
        setTimeout(() => {
            setDomain('gmail.com');
        }, 700);
    }, []);

    if (!email || !domain) {
        return null;
    }

    return <EmailRoot {...restProps}>{email}@{domain}</EmailRoot>;
};

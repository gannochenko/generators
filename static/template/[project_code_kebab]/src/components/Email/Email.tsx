import React, { FunctionComponent, useEffect, useState } from 'react';

import { EmailRoot } from './style';
import { EmailPropsType } from './type';

export const Email: FunctionComponent<EmailPropsType> = ({ ...restProps }) => {
    const [email, setEmail] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setEmail('gannochenko.sv');
        }, 500);
    }, []);

    if (!email) {
        return null;
    }

    return <EmailRoot {...restProps}>{email}@gmail.com</EmailRoot>;
};

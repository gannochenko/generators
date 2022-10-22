import React, { FC } from 'react';

import { EmailRoot } from './style';
import { EmailPropsType } from './type';
import { useEmail } from './hooks/useEmail';

export const Email: FC<EmailPropsType> = ({ ...restProps }) => {
    const { noRender, email, domain } = useEmail();

    if (noRender) {
        return null;
    }

    return (
        <EmailRoot {...restProps}>
            {email}@{domain}
        </EmailRoot>
    );
};

import React, { FC } from 'react';

import { ContactFormState, AuthState } from '.';

export const StateProviders: FC = ({ children }) => {
    return (
        <ContactFormState.Provider>
            <AuthState.Provider>{children}</AuthState.Provider>
        </ContactFormState.Provider>
    );
};

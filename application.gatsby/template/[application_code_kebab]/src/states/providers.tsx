import React, { FC } from 'react';
<% if (use_contact_form) { %>
import { ContactFormState } from './contactFormState';
<% } %>

export const StateProviders: FC = ({ children }) => {
<% if (use_contact_form) { %>
    return <ContactFormState.Provider>{children}</ContactFormState.Provider>;
<% } else { %>
    return <>{children}</>;
<% } %>
};

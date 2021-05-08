export const template = `
html
    body
        h1 New message from "<%- project_name %>"!
        h2 Message:
        p #{escapedMessage}
        if escapedContact
            h3 Contact the author:
            p #{escapedContact}
`;

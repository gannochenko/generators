export const template = `
html
    body
        h1 New message from <%- project_name %>!
        h2 Message:
        p #{message}
        if contact
            h3 How to contact the author:
            p #{contact}
`;

module.exports = {
    <%- content_name_snake_uc %>_LIST: '/<%- content_name_kebab %>',
    <%- content_name_snake_uc %>_DETAIL: '/<%- content_name_kebab %>/#SLUG#/',
    <% if(use_contact_form) { %>CONTACTS: '/contacts',<% } %>
    <% if(use_contact_form) { %>PERSONAL_DATA: '/personal-data',<% } %>
    ABOUT: '/about',

    fillTemplate: (template, values) => {
        let result = template;

        if (values) {
            Object.keys(values).forEach((key) => {
                const value = values[key];
                result = result
                    .replace(`#${key}#`, value)
                    .replace(`#${key.toUpperCase()}#`, value);
            });
        }

        return result;
    },
};

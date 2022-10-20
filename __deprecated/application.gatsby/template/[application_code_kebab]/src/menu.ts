import {
    <%- content_name_snake_uc %>_LIST,
    ABOUT,
    <% if(use_contact_form) { %>
    CONTACTS,
    <% } %>
} from './pathTemplates';

type MenuItemsType = {
    text: string;
    link: string;
}[];

export const menu: MenuItemsType = [
    { text: '<%- content_name %>', link: <%- content_name_snake_uc %>_LIST },
    { text: 'About', link: ABOUT },
<% if(use_contact_form) { %>
    { text: 'Contacts', link: CONTACTS },
<% } %>
];

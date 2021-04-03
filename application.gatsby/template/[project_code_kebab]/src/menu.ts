import { <%- content_name_snake_uc %>_LIST, ABOUT } from './pathTemplates';

export const menu = [
    { text: '<%- content_name %>', link: <%- content_name_snake_uc %>_LIST },
    { text: 'About', link: ABOUT },
];

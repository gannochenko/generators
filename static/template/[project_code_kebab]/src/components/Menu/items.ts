export const items = [
<% if (use_blog) { %>
    { text: 'Blog', link: '/blog' },
<% } %>
<% if (no_blog) { %>
    { text: 'Content', link: '/content' },
<% } %>
];
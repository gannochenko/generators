<% if(use_postgres) { %>
export * from './sample';
<% } else { %>
export const models = [];
<% } %>

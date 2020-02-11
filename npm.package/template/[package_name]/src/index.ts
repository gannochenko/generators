<% if (cli) { %>#!/usr/bin/env node <% } %>
<% if (!cli) { %>
export * from './something';
<% } %>

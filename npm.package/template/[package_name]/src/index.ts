<% if (is_cli) { %>#!/usr/bin/env node<% } %>
<% if (use_cli_boilerplate) { %>
import { Application } from './lib/application';

const app = new Application();
app.run().catch(error => {
    console.error(error.stack);
});
<% } %>

<% if (is_cli) { %>#!/usr/bin/env node<% } %>
<% if (use_cli_boilerplate) { %>
import debug from 'debug';
import { Application } from './lib/application';

const d = debug('app');

const app = new Application();
app.run().catch(error => {
    console.error(`Error: ${error.message}`);
    d(error.stack);
});
<% } %>

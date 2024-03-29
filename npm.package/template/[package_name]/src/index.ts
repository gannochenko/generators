<% if (is_cli) { %>#!/usr/bin/env node<% } %>
<% if (use_cli_boilerplate) { %>
import debug from 'debug';
import { Application } from './lib/Application';

const d = debug('app');

const app = new Application();
app.run().catch(error => {
    console.error(`Error: ${error.message}`);
    d(error.stack);
});
<% } %>
<% if (use_ui_boilerplate) { %>
export * from './components';
<% } %>

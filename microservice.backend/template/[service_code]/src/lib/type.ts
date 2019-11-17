<% if(use_postgres) { %>
import { EntitySchema } from 'typeorm';
<% } %>
import { Settings } from './settings';

<% if(use_postgres) { %>
export interface DatabaseOptions {
    settings: Settings;
    entities?: EntitySchema[];
}
<% } %>

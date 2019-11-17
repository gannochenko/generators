import { InputContext as MVCInputContext } from '@bucket-of-bolts/express-mvc';
<% if(use_postgres) { %>
import { Connection } from 'typeorm';
<% } %>

export interface CustomContext {
<% if(use_postgres) { %>}
    connection: Connection;
<% } %>
}
export type Context = MVCInputContext<CustomContext>;

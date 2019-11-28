import { InputContext as MVCInputContext } from '@bucket-of-bolts/express-mvc';
<% if(use_postgres) { %>import { Connection } from 'typeorm';<% } %>

export interface CustomContext {
<% if(use_postgres) { %>
    connection: Connection;
<% } %>
<% if(use_grpc) { %>
    grpc: any; // todo: fix me
<% } %>
}
export type Context = MVCInputContext<CustomContext>;

<% if (use_postgres) { %>import { Connection } from 'typeorm';<% } %>

export interface DataSources {
}

export interface Context {
    token: string;
<% if (use_postgres) { %>    connection: Connection;<% } %>
    [k: string]: any;
}

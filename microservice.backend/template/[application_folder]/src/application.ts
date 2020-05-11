import '@babel/polyfill';
import { logInfo } from '@bucket-of-bolts/util';
import { useControllers } from '@bucket-of-bolts/express-mvc';
import path from 'path';
import helmet from 'helmet';
import express from 'express';
import process from 'process';

import { useErrorHandler } from './lib/error-handler';
import { useCORS } from './lib/cors';
import { useMetrics } from './lib/metrics';

<% if (use_postgres) { %>import { Database } from './lib/database';<% } %>
<% if (use_graphql) { %>import { useGraphQL } from './graphql/server';<% } %>
import { controllers } from './controller';
<% if (use_grpc) { %>import { useGRPC } from './grpc';<% } %>

(async () => {
    const app = express();
    useErrorHandler(app);

    const host = process.env.NETWORK__HOST || 'localhost';
    const port = process.env.PORT || process.env.NETWORK__PORT || 3000;

    app.set('host', host);
    app.set('port', port);

    await useCORS(app);
    useMetrics(app);

<% if (use_static) { %>
    app.use(express.static(path.join(process.cwd(), 'public')));
<% } %>
    app.use(helmet());
<% if (use_rest) { %>
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );
    // app.set('query parser', query => {
    //   return qs.parse(query, { allowPrototypes: false, depth: 10 });
    // });
<% } %>

<% if (use_grpc) { %>
    const grpc = await useGRPC();
<% } %>

<% if (use_postgres) { %>
    const database = new Database();
<% } %>
    useControllers(app, controllers, async () => ({
<% if (use_postgres) { %>
        connection: await database.getConnection(),
<% } %>
<% if (use_grpc) { %>
        grpc,
<% } %>
    }));
<% if (use_graphql) { %>
    useGraphQL(
        app,
        {},
        async () => ({
<% if (use_postgres) { %>
            connection: await database.getConnection(),
<% } %>
<% if (use_grpc) { %>
            grpc,
<% } %>
        }),
    );
<% } %>

    const server = app.listen({ port }, () => {
        logInfo(`🚀 <%- application_name %> is ready at http://${host}:${port}`);
    });

    process.on('SIGTERM', () => {
        server.close(error => {
            if (error) {
                console.error(error);
                process.exit(1);
            }

            process.exit(0);
        });
    });
})();

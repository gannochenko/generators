import '@babel/polyfill';
import { logInfo } from '@bucket-of-bolts/util';
import { useControllers } from '@bucket-of-bolts/express-mvc';
import path from 'path';
import helmet from 'helmet';
import express from 'express';
import process from 'process';

import { useErrorHandler } from './lib/error-handler';
import { useCORS } from './lib/cors';
import { Settings } from './lib/settings';

<% if (use_postgres) { %>import { Database } from './lib/database';<% } %>
<% if (use_graphql) { %>import { useGraphQL } from './graphql/server';<% } %>
import { controllers } from './controller';

(async () => {
    const settings = new Settings();

    const app = express();
    useErrorHandler(app);

    const host = await settings.get('NETWORK__HOST', 'localhost');
    const port =
        process.env.PORT || (await settings.get('NETWORK__PORT', 3000));

    app.set('host', host);
    app.set('port', port);
    // app.set('query parser', query => {
    //   return qs.parse(query, { allowPrototypes: false, depth: 10 });
    // });

    await useCORS(app, settings);

<% if (use_static) { %>
    app.use(express.static(path.join(process.cwd(), 'public')));
<% } %>
    app.use(helmet());
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );

<% if (use_postgres) { %>
    const database = new Database({ settings });
<% } %>
    useControllers(app, controllers, async () => ({
<% if (use_postgres) { %>
        connection: await database.getConnection(),
<% } %>
    }));
<% if (use_graphql) { %>
    useGraphQL(
        app,
        {
            settings,
        },
        async () => ({
<% if (use_postgres) { %>
            connection: await database.getConnection(),
<% } %>
        }),
    );
<% } %>

    app.listen({ port }, () => {
        logInfo(`🚀 <%- application_name %> is ready at http://${host}:${port}`);
    });
})();

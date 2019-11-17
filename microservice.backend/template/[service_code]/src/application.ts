import '@babel/polyfill';
import { logInfo } from '@bucket-of-bolts/util';
import { useControllers } from '@bucket-of-bolts/express-mvc';
import path from 'path';
import helmet from 'helmet';
import express from 'express';
import process from 'process';

import useErrorHandler from './lib/error-handler';
import { useCORS } from './lib/cors';

import { Settings } from './lib/settings';

import { Database } from './lib/database';
import { useGraphQL } from './graphql/server';
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

    app.use(express.static(path.join(process.cwd(), 'public')));
    app.use(helmet());
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );

    const database = new Database({ settings });

    useControllers(app, controllers, async () => ({
        connection: await database.getConnection(),
    }));
    useGraphQL(
        app,
        {
            settings,
        },
        async () => ({
            connection: await database.getConnection(),
        }),
    );

    app.listen({ port }, () => {
        logInfo(`🚀 <%- application_name %> is ready at http://${host}:${port}`);
    });
})();

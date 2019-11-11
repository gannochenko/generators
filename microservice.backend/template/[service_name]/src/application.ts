import '@babel/polyfill';
import { Settings, logInfo } from '@bucket-of-bolts/util';
import { useControllers } from '@bucket-of-bolts/express-mvc';
import path from 'path';
import helmet from 'helmet';
import express from 'express';

import useErrorHandler from './lib/error-handler';
import useCORS from './lib/cors';
import Cache from './lib/cache';

import { Database } from './lib/database';
import useGraphQL from './lib/graphql/apollo';
import { controllers } from './controller';

(async () => {
    const settings: Settings = new Settings();

    const app = express();
    useErrorHandler(app);

    const host = await settings.get('network.host', 'localhost');
    const port = process.env.PORT || (await settings.get('network.port', 3000));

    app.set('host', host);
    app.set('port', port);
    // app.set('query parser', query => {
    //   return qs.parse(query, { allowPrototypes: false, depth: 10 });
    // });

    useCORS(app, settings);

    app.use(express.static(path.join(process.cwd(), 'public')));
    app.use(helmet());
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );

    const cache = await Cache.make({ settings });
    const database = new Database({ settings });

    useControllers(app, controllers, {
        database,
    });
    useGraphQL(app, {
        settings,
        cache,
        database,
    });

    app.listen({ port }, () => {
        logInfo(`🚀 API server is ready at http://${host}:${port}`);
    });
})();

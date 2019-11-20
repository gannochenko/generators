import express from 'express';
// import React from 'react';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

import { Settings, logger } from 'ew-internals';

// import { renderToString } from 'react-dom/server';
// import Application from "../common/Application";
import { get as getSplash } from '../common/splash/server';

const app = express();
const settings = new Settings();

if (!__DEV__) {
    process
        .on('unhandledRejection', err => {
            logger.error('Unhandled rejection', err);
        })
        .on('uncaughtException', err => {
            logger.error('Uncaught exception', err);
        });
}

// catching normal unhandled exceptions
app.use((err, req, res, next) => {
    logger.error('Unhandled exception', err);
    res.send(__DEV__ ? err.message : 'Nasty error');
});

app.set('port', <%- port %>);

app.use(
    cors({
        origin: (origin, cb) => {
            // allow requests with no origin, like mobile apps or curl requests
            if (!origin || __DEV__) {
                return cb(null, true);
            }

            // get cors settings on each hit, to be able to change it at the run-time
            settings
                .get('network.cors', null)
                .then(corsSettings => {
                    const origins = _.isne(corsSettings)
                        ? corsSettings.split(',').map(x => x.trim())
                        : [];

                    let match = false;
                    if (_.iane(origins)) {
                        // we have CORS settings
                        match = origins.indexOf(origin) >= 0;
                    }

                    if (match) {
                        return cb(null, true);
                    } else {
                        return cb(new Error('CORS mismatch'), false); // todo: throw 403
                    }
                })
                .catch(error => {
                    logger.error('Error occurred when checking CORS', error);
                    return cb(new Error('CORS error'), false); // todo: throw 500
                });
        },
    }),
);

app.use(helmet());
app.use(express.static(path.join(process.cwd(), 'public')));

// todo: use renderer here
app.get('*', async (req, res) => {

    // todo: ssr is not ready yet
    const application = ''; // renderToString(<Application />);
    const splash = getSplash();

    let clientScript = '<script src="/client.js"></script>';
    if (__DEV__) {
        clientScript = `<script>document.write('<sc'+'ript src="http://'+document.location.hostname+':<%- portHMR %>/client.js"></sc'+'ript>')</script>`;
    }

    const html = `<!doctype html>
    <html lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title><%- applicationName %></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">${splash.css}</style>
        </head>
        <body>
            ${splash.html}
            <script type="text/javascript">${splash.js}</script>
            <div id="root">${application}</div>
            <script>
                window.__settings = ${JSON.stringify(await settings.forward(['api.url']))};
            </script>
            ${clientScript}
        </body>
    </html>`;

    res.send(html);
});

export default app;

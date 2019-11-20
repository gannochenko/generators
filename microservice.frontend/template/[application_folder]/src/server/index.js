import http from 'http';
import app from './server';

const server = http.createServer(app);
let currentApp = app;
server.listen(process.env.PORT || process.env.NETWORK__PORT);

if (module.hot) {
    module.hot.accept('./server', () => {
        server.removeListener('request', currentApp);
        server.on('request', app);
        currentApp = app;
    });
}

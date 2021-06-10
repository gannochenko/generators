import express, { Request, Response } from 'express';
import cors from 'cors';
import { readdir, stat } from 'fs';
import { promisify } from 'util';
import { join } from 'path';

const readdirAsync = promisify(readdir);
const statAsync = promisify(stat);

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

(async () => {
    app.get(`/foobar`, async (req: Request, res: Response) => {
        return res
            .header('Content-Type', 'application/json')
            .header('Access-Control-Allow-Origin', '*')
            .status(200)
            .send(JSON.stringify({ status: 'ok' }));
    });

    const port = process.env.PORT || 3000;
    app.listen({ port }, () => {
        // eslint-disable-next-line no-console
        console.log(`Listening on ${port}`);
    });
})();

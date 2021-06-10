// eslint-disable-next-line import/no-extraneous-dependencies
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
    const files = await readdirAsync(__dirname);
    for (const file of files) {
        const fileStat = await statAsync(join(__dirname, file));
        if (fileStat.isDirectory()) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { fn, VERB } = require(join(__dirname, file, 'fn.ts'));

            // eslint-disable-next-line no-console
            console.info(`${VERB} /${file}`);
            // @ts-ignore
            app[VERB](`/${file}`, async (req: Request, res: Response) => {
                await fn(req.body);
                return res
                    .header('Content-Type', 'application/json')
                    .header('Access-Control-Allow-Origin', '*')
                    .status(200)
                    .send(JSON.stringify({ status: 'ok' }));
            });
        }
    }

    const port = process.env.PORT || 3000;

    app.listen({ port }, () => {
        // eslint-disable-next-line no-console
        console.log(`Listening on ${port}`);
    });
})();

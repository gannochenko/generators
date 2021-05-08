// eslint-disable-next-line import/no-extraneous-dependencies
import express, { Request, Response } from 'express';
import cors from 'cors';
import { fn } from './fn';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.post('/contact-form-submit', async (req: Request, res: Response) => {
    const { message, contact } = req.body;

    if (!message) {
        return res.status(400).send();
    }

    await fn(message, contact);
    return res
        .header('Content-Type', 'application/json')
        .header('Access-Control-Allow-Origin', '*')
        .status(200)
        .send(JSON.stringify({ status: 'ok' }));
});

const port = process.env.PORT || 3000;

app.listen({ port }, () => {
    console.log(`Listening on ${port}`);
});

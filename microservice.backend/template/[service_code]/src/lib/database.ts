import { createConnection } from 'typeorm';
import { injectPassword } from '@bucket-of-bolts/util';
import { Express } from 'express';
import { DatabaseOptions } from './type';
import * as entities from '../model';

export class Database {
    private readonly options: DatabaseOptions;

    public constructor(
        parameters: DatabaseOptions,
    ) {
        this.options = parameters;
    }

    public async getConnection() {
        const { settings } = this.options;

        const url = (await settings.get('DATABASE__URL', '')) as string;
        const password = (await settings.get('DATABASE__PASSWORD', '')) as string;
        if (!url) {
            throw new Error('DB__URL not defined');
        }

        const sUrl = injectPassword(url, password);

        // don't forget to close() the connection to return it back to the pool
        return createConnection({
            ...this.options,
            url: sUrl,
            type: 'postgres',
            entities: Object.values(entities),
        });
    }
}

export const useConnection = (app: Express, database: Database) => {
    app.use((req, res, next) => {
        const originSend = res.send;

        // @ts-ignore
        res.getDatabaseConnection = async () => {
            // @ts-ignore
            if (!res.dbConnection) {
                // @ts-ignore
                res.dbConnection = await database.getConnection();
            }

            // @ts-ignore
            return res.dbConnection;
        };

        res.send = function (...args) {
            // @ts-ignore
            if (res.dbConnection) {
                // @ts-ignore
                res.dbConnection.close();
            }

            return originSend.apply(this, args);
        };
        next();
    });
};

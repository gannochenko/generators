import { createConnection } from 'typeorm';
import { injectPassword } from '@bucket-of-bolts/util';
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

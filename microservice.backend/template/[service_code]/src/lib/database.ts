import { createConnection } from 'typeorm';
import { injectPassword } from '@bucket-of-bolts/util';
import {DatabaseOptions} from './type';

export class Database {
    private readonly options: DatabaseOptions;

    public constructor(
        parameters: DatabaseOptions,
    ) {
        this.options = parameters;
    }

    public async getConnection() {
        const { settings } = this.options;

        const url = (await settings.get('DB__URL', '')) as string;
        const password = (await settings.get('DB__PASSWORD', '')) as string;
        if (!url) {
            throw new Error('db.url not defined');
        }

        const sUrl = injectPassword(url, password);

        return createConnection({
            ...this.options,
            url: sUrl,
            type: 'postgres',
        });
    }
}

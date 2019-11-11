import { createConnection, Connection, EntitySchema } from 'typeorm';
import { DB_MIGRATION_TABLE_NAME } from '@project-minimum/core';
import { injectPassword, Settings } from '@bucket-of-bolts/util';
import SchemaEntity from '../../model/schema';
import migrations from '../../migrations';

interface ConnectionOptions {
    settings: Settings;
    entities?: EntitySchema[];
    migrationsTableName?: string;
    name?: string;
    migrations?: Function[];
    [key: string]: any;
}

export class Database {
    private readonly settings: Settings;

    public constructor(
        { settings }: ConnectionOptions = { settings: null },
    ) {
        this.settings = settings;
    }

    private async getConnection() {
        const { settings } = parameters;
        if (!settings) {
            throw new Error('No settings provided');
        }

        const url = (await settings.get('db.url', null)) as Nullable<string>;
        const password = (await settings.get('db.password', null)) as Nullable<string>;
        if (!url) {
            throw new Error('db.url not defined');
        }

        const sUrl = injectPassword(url, password);

        return createConnection({
            ...parameters,
            url: sUrl,
            type: 'postgres',
        });
    }
}

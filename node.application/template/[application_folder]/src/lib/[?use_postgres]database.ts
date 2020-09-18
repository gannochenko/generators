import { Connection, createConnection } from 'typeorm';
import { injectPassword } from '@gannochenko/etc';
import * as entities from '../model';
import { ObjectLiteral } from '../type';

export class Database {
    private connections: ObjectLiteral<Connection> = {};

    public async getConnection(name = 'default') {
        if (this.connections[name]) {
            return this.connections[name];
        }

        const url = process.env.DATABASE__URL || '';
        const password = process.env.DATABASE__PASSWORD || '';
        if (!url) {
            throw new Error('DATABASE__URL not defined');
        }

        const connection = await createConnection({
            url: injectPassword(url, password),
            type: 'postgres',
            entities: Object.values(entities),
            name: name || 'default',
        });

        this.connections[name] = connection;

        return connection;
    }
}

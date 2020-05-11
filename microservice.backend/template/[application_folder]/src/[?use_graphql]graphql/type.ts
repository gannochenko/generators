import { Connection } from 'typeorm';

export interface DataSources {
}

export interface Context {
    token: string;
    connection: Connection;
}

import { Connection } from 'typeorm';
import { Settings } from '../lib/settings';

export interface DataSources {
    settings: Settings;
}

export interface Context {
    token: string;
    connection: Connection;
}

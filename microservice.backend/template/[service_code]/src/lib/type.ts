import { InputContext as MVCInputContext } from '@bucket-of-bolts/express-mvc';
import { Connection, EntitySchema } from 'typeorm';
import { Settings } from './settings';

export interface Context {
    getDatabaseConnection: () => Connection;
}
export type InputContext = MVCInputContext<Context>;

export interface DatabaseOptions {
    settings: Settings;
    entities?: EntitySchema[];
}

import { InputContext as MVCInputContext } from '@bucket-of-bolts/express-mvc/type';
import { EntitySchema } from 'typeorm';
import {Database} from './database';
import {Settings} from './settings';

export interface RuntimeParameters {
    database: Database;
}
export type InputContext = MVCInputContext<RuntimeParameters>;

export interface DatabaseOptions {
    settings: Settings;
    entities?: EntitySchema[];
}

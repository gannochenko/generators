import { InputContext as MVCInputContext } from '@bucket-of-bolts/express-mvc/type';
import {Database} from './database';

export interface RuntimeParameters {
    database: Database;
}
export type InputContext = MVCInputContext<RuntimeParameters>;

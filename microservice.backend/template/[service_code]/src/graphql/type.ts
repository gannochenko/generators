import {Settings} from '../lib/settings';
import {Database} from '../lib/database';

export interface ServerOptions {
    settings: Settings;
    database: Database;
}

import { Settings } from '../lib/settings';
import { Database } from '../lib/database';

export interface DataSources {
    settings: Settings;
    database: Database;
}

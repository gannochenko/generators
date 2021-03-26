import { MigrationInterface, QueryRunner } from 'typeorm';

import { seed } from './seedData';
import { isDev } from '../utils/isDev';

/**
 * https://github.com/typeorm/typeorm/blob/master/docs/migrations.md
 */
export class Initial1517934720430 implements MigrationInterface {
    public async up(queryRunner: QueryRunner) {
        await queryRunner.connection.synchronize(false);

        if (isDev()) {
            await seed(queryRunner);
        }

        console.log('🌱 Initial migration applied');
    }

    // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
    public async down() {}
}

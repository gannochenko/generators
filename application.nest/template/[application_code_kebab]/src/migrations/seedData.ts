import { QueryRunner } from 'typeorm';

import { AuthorEntity } from '../entities/AuthorEntity';
import { UserRoleEntity } from '../entities/UserRoleEntity';
import { UserEntity } from '../entities/UserEntity';

const authors = [
    {
        firstName: 'Max',
        lastName: 'Mustermann',
        isActive: true,
    },
];

const userRoles = [
    {
        id: '966df3c5-2f0c-4faf-a7ee-609d1524debd',
        code: 'ADMIN',
    },
    {
        id: '629bd4d7-9143-46d6-9c61-8818ddbc60af',
        code: 'EDITOR',
    },
];

const users = [
    {
        id: 'a622f9c3-8ce8-4cb1-8662-9bfe943d4c78',
        externalId: 'google-oauth2/foobar',
    },
];

const userToRole = [
    {
        userRoleEntityId: '966df3c5-2f0c-4faf-a7ee-609d1524debd',
        userEntityId: 'a622f9c3-8ce8-4cb1-8662-9bfe943d4c78',
    },
];

export const seed = async (queryRunner: QueryRunner) => {
    // seed authors
    await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(AuthorEntity)
        .values(authors)
        .execute();

    // seed user roles
    await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(UserRoleEntity)
        .values(userRoles)
        .execute();

    // seed users
    await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values(users)
        .execute();

    // seed user to role
    await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into('user_entity_roles_user_role_entity')
        .values(userToRole)
        .execute();
};

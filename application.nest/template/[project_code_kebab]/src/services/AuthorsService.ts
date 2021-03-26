import { Injectable } from '@nestjs/common';
import { Repository, Connection, FindOneOptions } from 'typeorm';
import { IDType, ObjectLiteralType } from '../type';
import { AuthorEntity } from '../entities/AuthorEntity';

// https://github.com/typeorm/typeorm/blob/master/docs/repository-api.md

type AuthorCreationInputType = {
    firstName: string;
    lastName: string;
};

type AuthorUpdateInputType = {
    firstName?: string;
    lastName?: string;
};

@Injectable()
export class AuthorsService {
    usersRepository: Repository<AuthorEntity>;

    constructor(private connection: Connection) {
        this.usersRepository = connection.getRepository(AuthorEntity);
    }

    async create(data: AuthorCreationInputType): Promise<AuthorEntity> {
        const element = this.usersRepository.create(data);

        return await this.usersRepository.save(element);
    }

    // todo: get only the requested fields, don't use *
    async update(
        id: IDType,
        data: AuthorUpdateInputType,
    ): Promise<AuthorEntity> {
        await this.usersRepository.update(id, data);
        return await this.usersRepository.findOne(id);
    }

    // todo: get only the requested fields, don't use *
    async delete(id: IDType): Promise<AuthorEntity> {
        const element = await this.usersRepository.findOne(id);

        await this.usersRepository.delete(id);

        return element;
    }

    async findAll({ filter, limit }: ObjectLiteralType = {}): Promise<
        AuthorEntity[]
    > {
        return this.usersRepository.find(filter);
    }

    // todo: get only the requested fields, don't use *
    async findOneById(
        id: IDType,
        { select }: FindOneOptions<AuthorEntity> = {},
    ): Promise<AuthorEntity> {
        return this.usersRepository.findOne(id, {
            select,
        });
    }

    async isElementExists(id: IDType): Promise<boolean> {
        const element = await this.usersRepository.findOne(id, {
            select: ['id'],
        });

        return !!element;
    }
}

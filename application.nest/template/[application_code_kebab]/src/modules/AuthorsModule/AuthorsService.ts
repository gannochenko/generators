import { Injectable } from '@nestjs/common';
import { Repository, Connection, FindOneOptions } from 'typeorm';
import { AuthorEntity } from '../../entities';
import { tryExecute } from '../../utils/tryExecute';
import {
    CreateAuthorInputType,
    CreateAuthorOutputType,
    UpdateAuthorInputType,
    UpdateAuthorOutputType,
    DeleteAuthorOutputType,
    FindAuthorsInputType,
    FindAuthorsOutputType,
    FindOneAuthorOutputType,
} from './type';

// https://github.com/typeorm/typeorm/blob/master/docs/repository-api.md

@Injectable()
export class AuthorsService {
    usersRepository: Repository<AuthorEntity>;

    constructor(private readonly connection: Connection) {
        this.usersRepository = connection.getRepository(AuthorEntity);
    }

    async create(data: CreateAuthorInputType): Promise<CreateAuthorOutputType> {
        return tryExecute(async () => {
            const element = this.usersRepository.create(data);
            return await this.usersRepository.save(element);
        });
    }

    // todo: get only the requested fields, don't use *
    async update(
        id: string,
        data: UpdateAuthorInputType,
    ): Promise<UpdateAuthorOutputType> {
        return tryExecute(async () => {
            await this.usersRepository.update(id, data);
            return await this.usersRepository.findOne(id);
        });
    }

    // todo: get only the requested fields, don't use *
    async delete(id: string): Promise<DeleteAuthorOutputType> {
        return tryExecute(async () => {
            const element = await this.usersRepository.findOne(id);

            await this.usersRepository.delete(id);

            return element;
        });
    }

    async findAll({ filter, limit }: FindAuthorsInputType): Promise<
        FindAuthorsOutputType
    > {
        return tryExecute(async () => {
            return this.usersRepository.find(filter);
        });
    }

    // todo: get only the requested fields, don't use *
    async findOneById(
        id: string,
        { select }: FindOneOptions<AuthorEntity> = {},
    ): Promise<FindOneAuthorOutputType> {
        return tryExecute(async () => {
            return this.usersRepository.findOne(id, {
                select,
            });
        });
    }

    async isElementExists(id: string): Promise<boolean> {
        return tryExecute(async () => {
            const element = await this.usersRepository.findOne(id, {
                select: ['id'],
            });

            return !!element;
        });
    }
}

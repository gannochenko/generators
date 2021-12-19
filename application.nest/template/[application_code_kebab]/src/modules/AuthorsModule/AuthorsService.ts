import { Injectable } from '@nestjs/common';
import { Repository, Connection, FindOneOptions } from 'typeorm';
import { AuthorEntity } from '../../entities';
import { tryExecute } from '../../utils/tryExecute';
import {
    CreateAuthorInputType,
    UpdateAuthorInputType,
    FindAuthorsInputType,
} from './type';

// https://github.com/typeorm/typeorm/blob/master/docs/repository-api.md

@Injectable()
export class AuthorsService {
    usersRepository: Repository<AuthorEntity>;

    constructor(private readonly connection: Connection) {
        this.usersRepository = connection.getRepository(AuthorEntity);
    }

    async create(data: CreateAuthorInputType) {
        return tryExecute(async () => {
            const element = this.usersRepository.create(data);
            return await this.usersRepository.save(element);
        });
    }

    // todo: get only the requested fields, don't use *
    async update(
        id: string,
        data: UpdateAuthorInputType,
    ) {
        return tryExecute(async () => {
            await this.usersRepository.update(id, data);
            return await this.usersRepository.findOne(id);
        });
    }

    // todo: get only the requested fields, don't use *
    async delete(id: string) {
        return tryExecute(async () => {
            const element = await this.usersRepository.findOne(id);

            await this.usersRepository.delete(id);

            return element;
        });
    }

    async findAll({ filter, limit }: FindAuthorsInputType) {
        return tryExecute(async () => {
            return this.usersRepository.find(filter);
        });
    }

    // todo: get only the requested fields, don't use *
    async findOneById(
        id: string,
        { select }: FindOneOptions<AuthorEntity> = {},
    ) {
        return tryExecute(async () => {
            return this.usersRepository.findOne(id, {
                select,
            });
        });
    }

    async isElementExists(id: string) {
        return tryExecute(async () => {
            const element = await this.usersRepository.findOne(id, {
                select: ['id'],
            });

            return !!element;
        });
    }
}

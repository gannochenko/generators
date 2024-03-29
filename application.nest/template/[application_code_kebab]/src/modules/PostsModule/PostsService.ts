import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import debug from 'debug';
import { PostEntity } from '../../entities';
import {AuthorsService} from '../AuthorsModule/AuthorsService';
import { tryExecute } from '../../utils/tryExecute';
import { FindAllPostsInputType } from './type';

const d = debug('app.PostsService');

@Injectable()
export class PostsService {
    postsRepository: Repository<PostEntity>;

    constructor(
        private readonly connection: Connection,
        private readonly authorsService: AuthorsService
    ) {
        this.postsRepository = connection.getRepository(PostEntity);
        this.authorsService = authorsService;
    }

    async findAll({ authorId }: FindAllPostsInputType) {
        return tryExecute(async () => {
            d('FindAll');
            if (!await this.authorsService.isElementExists(authorId)) {
                return [];
            }

            return [];
        });
    }
}

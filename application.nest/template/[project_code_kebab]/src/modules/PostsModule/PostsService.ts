import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { PostEntity } from '../../entities';
import {AuthorsService} from '../AuthorsModule/AuthorsService';

type SearchRequestType = {
    authorId: string;
};

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

    async findAll({ authorId }: SearchRequestType) {
        if (!await this.authorsService.isElementExists(authorId)) {
            return [];
        }

        return [];
    }
}

import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { PostEntity } from '../entities/PostEntity';

type SearchRequestType = {
    authorId: string;
};

@Injectable()
export class PostsService {
    postsRepository: Repository<PostEntity>;

    constructor(private connection: Connection) {
        this.postsRepository = connection.getRepository(PostEntity);
    }

    async findAll({ authorId }: SearchRequestType) {
        return [];
    }
}

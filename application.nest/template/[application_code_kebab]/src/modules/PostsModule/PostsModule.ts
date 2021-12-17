import { Module } from '@nestjs/common';
import { PostsService } from './PostsService';
import {AuthorsModule} from '../AuthorsModule';

@Module({
    providers: [PostsService],
    exports: [PostsService],
    imports: [AuthorsModule],
})
export class PostsModule {}

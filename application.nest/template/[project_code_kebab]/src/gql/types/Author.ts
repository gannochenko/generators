import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Post } from './Post';

@ObjectType()
export class Author {
    @Field((type) => String, { description: 'Id of an author' })
    id: string;

    @Field({ nullable: true })
    firstName?: string;

    @Field({ nullable: true })
    lastName?: string;

    @Field((type) => [Post])
    posts: Post[];
}

@InputType()
export class AuthorUpdateInput {
    @Field({ nullable: true })
    firstName?: string;
    @Field({ nullable: true })
    lastName?: string;
}

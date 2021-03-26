import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
    @Field()
    id: string;

    @Field()
    title: string;
}

import { Resolver, Query, Args, Parent, ResolveField, Int, Mutation, InputType, Field, Info } from '@nestjs/graphql';
import { Author, AuthorUpdateInput } from '../types/Author';
import { AuthorsService } from '../../modules/AuthorsModule/AuthorsService';
import { PostsService } from '../../modules/PostsModule/PostsService';
import { ObjectLiteralType } from '../../type';
import { getSelectedGQLFields } from '../../utils/getSelectedGQLFields';

type AuthorQueryFields = ('id' | 'firstName' | 'lastName' | 'isActive')[];

// https://docs.nestjs.com/graphql/resolvers
@Resolver((of) => Author)
export class AuthorsResolver {
    constructor(
        private authorsService: AuthorsService,
        private postsService: PostsService,
    ) {}

    /*
    query {
      author(id: "88b3bc24-127d-4c87-b48c-f9b2f9466d4c") {
        firstName
      }
    }
     */
    @Query((returns) => Author, { name: 'author', nullable: true })
    async author(
        @Args('id', { type: () => String }) id: string,
        @Info() info: ObjectLiteralType,
    ) {
        const select = getSelectedGQLFields(info) as AuthorQueryFields;
        return this.authorsService.findOneById(id, { select });
    }

    @ResolveField()
    async posts(@Parent() author: Author) {
        const { id } = author;
        return this.postsService.findAll({ authorId: id });
    }

    /*
    mutation {
      authorUpdate(data: { lastName: "Bar", firstName: "Foo"}, id: "88b3bc24-127d-4c87-b48c-f9b2f9466d4c") {
        id
        firstName
      }
    }
     */
    @Mutation(returns => Author, { nullable: true })
    async authorUpdate(
        @Args('id', { type: () => String })
        id: string,
        @Args('data')
        data: AuthorUpdateInput,
    ) {
        return this.authorsService.update(id, data);
    }
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PostEntity } from './PostEntity';

@Entity()
export class AuthorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    // https://typeorm.io/#/relations
    @OneToMany((type) => PostEntity, (post) => post.authorId)
    posts: PostEntity[];
}

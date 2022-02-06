import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId } from 'typeorm';
import {AuthorEntity} from '../AuthorEntity';

@Entity({
    name: 'post',
})
export class PostEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar' })
    @Column()
    title: string;

    @RelationId((item: PostEntity) => item.author)
    @Column({ type: 'varchar' })
    authorId: string;

    @ManyToOne((type) => AuthorEntity)
    author: AuthorEntity;
}

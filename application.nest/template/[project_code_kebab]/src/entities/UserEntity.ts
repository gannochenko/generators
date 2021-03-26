import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    Column,
} from 'typeorm';
import { UserRoleEntity } from './UserRoleEntity';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    externalId: string;

    @ManyToMany(() => UserRoleEntity)
    @JoinTable()
    roles: UserRoleEntity[];
}

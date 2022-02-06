import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'user_role',
})
export class UserRoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    code: string;
}

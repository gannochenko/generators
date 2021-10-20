import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserRoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    code: string;
}

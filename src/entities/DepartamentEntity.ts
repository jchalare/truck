
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,ManyToOne,JoinColumn} from 'typeorm'
import { User } from './UserEntity';

@Entity('departmens')
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('varchar', { nullable: false })
  name: string;
  
  @ManyToOne(() => User, user => user.id)
  @JoinColumn([{ name: "id_user" }, { name: "id" }])
  id_user: User;
}

import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,ManyToOne,JoinColumn} from 'typeorm'
import { User } from './UserEntity';

@Entity('trailers')
export class Trailer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('varchar', { nullable: false,unique:true })
  plate: string;
  
  @ManyToOne(() => User, user => user.id)
  @JoinColumn([{ name: "id_user" }, { name: "id" }])
  id_user: User;
}
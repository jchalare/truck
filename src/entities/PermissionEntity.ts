
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity,OneToOne,JoinColumn} from 'typeorm'
import { User } from './UserEntity';


@Entity('permissions')
export class Permission extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('boolean', {default: false})
  to_see: boolean = false;
 
  @Column('boolean', {default: false})
  to_save: boolean = false;

  @Column('boolean', {default: false})
  to_uodate: boolean = false;

  @OneToOne(() => User, user => user.id)
  @JoinColumn([{ name: "id_user" }, { name: "id" }])
  id_user: User;

}


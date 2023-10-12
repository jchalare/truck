
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { User } from './UserEntity';


@Entity('companies')
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false, unique: true })
  name: string;

}
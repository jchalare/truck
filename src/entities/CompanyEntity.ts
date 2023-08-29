
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'


@Entity('companies')
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('varchar', { nullable: false,unique:true })
  name: string;
}
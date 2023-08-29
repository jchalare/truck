
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity} from 'typeorm'


@Unique(['nombre'])
@Entity()
export class Compania extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;
}
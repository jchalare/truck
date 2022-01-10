
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity} from 'typeorm'


@Unique(['placa'])
@Entity()
export class Trailer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  placa: string;
}
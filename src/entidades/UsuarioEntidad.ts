
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity } from 'typeorm'


@Unique(['nombre'])
@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @Column()
  clave: string;

  @Column('boolean', {default: true})
  estado: boolean=true;
  
}
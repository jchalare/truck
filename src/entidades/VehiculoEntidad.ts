
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,PrimaryColumn,OneToMany } from 'typeorm'
import { Manifiesto } from './ManifiestoEntidad';

@Unique(['placa'])
@Entity()
export class Vehiculo extends BaseEntity {
  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: number;

  @Column()
  placa: string;

  @OneToMany(() => Manifiesto, manifiesto => manifiesto.vehiculo_)
  manifiesto: Manifiesto[];
    
}
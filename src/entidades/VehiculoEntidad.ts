
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,PrimaryColumn,OneToMany } from 'typeorm'
import { Viaje } from './ViajeEntidad';

@Unique(['placa'])
@Entity()
export class Vehiculo extends BaseEntity {
  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: number;

  @Column()
  placa: string;

  @OneToMany(() => Viaje, viaje => viaje.viaje_vehiculo)
  Viaje: Viaje[];
    
}
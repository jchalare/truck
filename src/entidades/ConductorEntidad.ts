
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,ManyToOne,JoinColumn,OneToMany } from 'typeorm'
import { Ciudad } from './CiudadEntidad';
import { Viaje } from './ViajeEntidad';



@Unique(['cedula'])
@Entity()
export class Conductor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: string;
  
  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  cuenta_banco: string;

  @Column('text', {default: null})
  email_conductor: string;

  @ManyToOne((type) => Ciudad)
  @JoinColumn([{ name: "id_ciudad_conductor" }, { name: "id" }])
  id_ciudad_conductor: Ciudad;

  @Column()
  direccion: string;

  
  @Column()
  telefono: string;

  @OneToMany(() => Viaje, viaje => viaje.id_conductor)
  id_conductor: Viaje[];

  
}
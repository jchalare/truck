
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,ManyToOne,JoinColumn,OneToMany } from 'typeorm'
import { Ciudad } from './CiudadEntidad';
import { Manifiesto } from './ManifiestoEntidad';



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
  Apellido: string;

  @Column()
  cuenta_banco: string;

  @Column('text', {default: null})
  email_conductor: string;

  @ManyToOne((type) => Ciudad)
  @JoinColumn([{ name: "id_ciudad" }, { name: "id" }])
  ciudad_: Ciudad;

  @Column()
  direccion: string;

  @OneToMany(() => Manifiesto, manifiesto => manifiesto.conductor_)
  manifiesto: Manifiesto[];

  
}
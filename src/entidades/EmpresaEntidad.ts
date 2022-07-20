
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity, OneToMany} from 'typeorm'
import { Viaje } from './ViajeEntidad';


@Unique(['nombre'])
@Entity()
export class Empresa extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @Column()
  responsable: string;

  @Column()
  telefono: string;

  @OneToMany(() => Viaje, viaje => viaje.id_empresa)
  viaje: Viaje[];
  
}
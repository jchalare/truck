
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity, OneToMany ,ManyToOne, JoinColumn} from 'typeorm'
import { Compania } from './CompaniaEntidad';
import { Viaje } from './ViajeEntidad';


@Unique(['nit'])
@Entity()
export class Empresa extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @Column()
  nit: string;

  @Column()
  responsable: string;

  @Column()
  telefono: string;
  
  @OneToMany(() => Viaje, viaje => viaje.id_empresa)
  viaje: Viaje[];
  
}
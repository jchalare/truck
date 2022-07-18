
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,OneToMany} from 'typeorm'
import { Viaje } from './ViajeEntidad';
import { Conductor } from './ConductorEntidad';


@Unique(['nombre'])
@Entity()
export class Ciudad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
   
  @Column()
  nombre: string; 

  @OneToMany(() => Viaje, Viaje => Viaje.viaje_origen_id)
  viaje_origen_id: Viaje[];

  @OneToMany(() => Viaje, Viaje => Viaje.viaje_destino_id)
  viaje_destino_id: Viaje[];

  @OneToMany(() => Conductor, conductor => conductor.id_ciudad_conductor)
  id_ciudad_conductor: Ciudad[];
}
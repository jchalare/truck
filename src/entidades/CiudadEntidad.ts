
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,OneToMany} from 'typeorm'
import { Manifiesto } from './ManifiestoEntidad';
import { Conductor } from './ConductorEntidad';


@Unique(['nombre'])
@Entity()
export class Ciudad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string; 

  @OneToMany(() => Manifiesto, manifiesto => manifiesto.origen_)
  manifiesto_origen: Manifiesto[];

  @OneToMany(() => Manifiesto, manifiesto => manifiesto.destino_)
  manifiesto_destino: Manifiesto[];

  @OneToMany(() => Conductor, conductor => conductor.ciudad_)
  ciudad: Ciudad[];
}
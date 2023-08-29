
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,OneToMany,ManyToOne,JoinColumn} from 'typeorm'
import { Viaje } from './ViajeEntidad';
import { Conductor } from './ConductorEntidad';
import { Departamento } from './DepartamentoEntidad';


@Unique(['nombre','id_departamento'])
@Entity()
export class Ciudad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
   
  @Column()
  nombre: string; 

  @ManyToOne(() => Departamento, departamento => departamento.id)
  @JoinColumn([{ name: "id_departamento" }, { name: "id" }])
  id_departamento: Departamento;

  @OneToMany(() => Viaje, Viaje => Viaje.viaje_origen_id)
  viaje_origen_id: Viaje[];

  @OneToMany(() => Viaje, Viaje => Viaje.viaje_destino_id)
  viaje_destino_id: Viaje[];

  @OneToMany(() => Conductor, conductor => conductor.id_ciudad_conductor)
  id_ciudad_conductor: Ciudad[];
}
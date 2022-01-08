
import {Entity, Column, PrimaryGeneratedColumn, 
        Unique,BaseEntity,ManyToOne,PrimaryColumn,
        CreateDateColumn, Double,JoinColumn,
        OneToMany } from 'typeorm'
import { Ciudad } from './CiudadEntidad';
import { Conductor } from './ConductorEntidad';
import { Empresa } from './EmpresaEntidad';
import { Vehiculo } from './VehiculoEntidad';




@Unique(['numero'])
@Entity()
export class Manifiesto extends BaseEntity {
  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: number;

  @Column()
  numero: string;
  
  @ManyToOne((type) => Vehiculo)
  @JoinColumn([{ name: "id_vehiculo" }, { name: "id" }])
  vehiculo_: Vehiculo;

  @ManyToOne((type) => Empresa)
  @JoinColumn([{ name: "id_empresa" }, { name: "id" }])
  empresa_: Empresa;

  @ManyToOne(() => Ciudad, ciudad => ciudad.id)
  @JoinColumn([{ name: "id_origen" }, { name: "id" }])
  origen_: Ciudad;

  @ManyToOne(() => Ciudad, ciudad => ciudad.id)
  @JoinColumn([{ name: "id_destino" }, { name: "id" }])
  destino_: Ciudad;

  @ManyToOne(() => Conductor, conductor => conductor.id)
  @JoinColumn([{ name: "id_conductor" }, { name: "id" }])
  conductor_: Conductor;

  @Column({ type: "numeric" })
  valor_viaje: number;

  @Column({ type: "numeric" })
  valor_anticipo: number;
  
  @Column({ type: "money" })
  valor_peaje: number;

  @Column({ type: "numeric" })
  valor_combustible: number;

  @Column({ type: "numeric" })
  valor_x_cobrar: number;

  @Column({ type: "numeric" })
  valor_total_costo: number;

  @CreateDateColumn({ type: "date" })
  fecha_viaje: Date;

  @CreateDateColumn({ type: "date" })
  fecha_pago: Date;

  @Column('boolean', {default: false})
  pagado: boolean = false;

  @Column({ type: "text" })
  notas: string;
}
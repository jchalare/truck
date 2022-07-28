
import {Entity, Column, PrimaryGeneratedColumn, 
        Unique,BaseEntity,ManyToOne,PrimaryColumn,
        CreateDateColumn, Double,JoinColumn,
        OneToMany } from 'typeorm'
import { Ciudad } from './CiudadEntidad';
import { Compania } from './CompaniaEntidad';
import { Conductor } from './ConductorEntidad';
import { Empresa } from './EmpresaEntidad';
import { Usuario } from './UsuarioEntidad';
import { Vehiculo } from './VehiculoEntidad';
import { Trailer } from './TrailerEntidad';

@Unique(['numero_viaje'])
@Entity()
export class Viaje extends BaseEntity {
  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: number;

  @Column()
  numero_viaje: string;
  
  @ManyToOne((type) => Vehiculo)
  @JoinColumn([{ name: "viaje_vehiculo_id" }, { name: "id" }])
  viaje_vehiculo: Vehiculo;

  @ManyToOne((type) => Empresa)
  @JoinColumn([{ name: "id_empresa" }, { name: "id" }])
  id_empresa: Empresa;

  @ManyToOne(() => Ciudad, ciudad => ciudad.id)
  @JoinColumn([{ name: "viaje_origen_id" }, { name: "id" }])
  viaje_origen_id: Ciudad;

  @ManyToOne(() => Ciudad, ciudad => ciudad.id)
  @JoinColumn([{ name: "viaje_destino_id" }, { name: "id" }])
  viaje_destino_id: Ciudad;

  @ManyToOne(() => Conductor, conductor => conductor.id)
  @JoinColumn([{ name: "id_conductor" }, { name: "id" }])
  id_conductor: Conductor;

  @Column({ type: "numeric" })
  valor_flete: number;

  @Column({ type: "numeric" })
  valor_anticipo: number;
  
  @Column({ type: "numeric" })
  valor_total_costo: number;

  @Column({ type: "numeric" })
  valor_total_costo_real: number;

  @CreateDateColumn({ type: "date" })
  fecha_viaje: Date;

  @CreateDateColumn({ type: "date" })
  fecha_pago: Date;

  @Column('boolean', {default: false})
  pagado: boolean = false;

  @Column({ type: "text" })
  notas: string;

  @ManyToOne(() => Usuario, usuario => usuario.id)
  @JoinColumn([{ name: "id_usuario_creador" }, { name: "id" }])
  id_usuario_creador: Usuario;


  @ManyToOne(() => Compania, compania => compania.id)
  @JoinColumn([{ name: "id_compania" }, { name: "id" }])
  id_compania: Compania;


}
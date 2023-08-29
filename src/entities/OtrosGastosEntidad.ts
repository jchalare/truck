
import {Entity, Column, PrimaryGeneratedColumn, 
    Unique,BaseEntity,ManyToOne,PrimaryColumn,
    CreateDateColumn, Double,JoinColumn,
    OneToMany } from 'typeorm'

import { TipoDetalle } from './TipoDetalleEntidad';
import { Usuario } from './UsuarioEntidad';
import { Vehiculo } from './VehiculoEntidad';


@Entity()
export class OtrosGastos extends BaseEntity {

@PrimaryGeneratedColumn()
@PrimaryColumn()
id: number;

@Column()
item_detalle: number;

@ManyToOne((type) => Vehiculo)
@JoinColumn([{ name: "id_vehiculo" }, { name: "id" }])
id_vehiculo: Vehiculo;

@ManyToOne(() => TipoDetalle, tipodetalle => tipodetalle.id)
@JoinColumn([{ name: "id_tipo_detalle" }, { name: "id" }])
id_tipo_detalle: TipoDetalle;

@Column({ type: "money" })
valor_gasto: number;

@CreateDateColumn({ type: "date" })
fecha_gasto: Date;

@Column({ type: "text" })
notas: string;

@ManyToOne(() => Usuario, usuario => usuario.id)
@JoinColumn([{ name: "id_usuario_creador" }, { name: "id" }])
id_usuario_creador: Usuario;

}

import {Entity, Column, PrimaryGeneratedColumn, 
    Unique,BaseEntity,ManyToOne,PrimaryColumn,
    CreateDateColumn, Double,JoinColumn,
    OneToMany } from 'typeorm'
import { Empresa } from './EmpresaEntidad';

import { TipoDetalle } from './TipoDetalleEntidad';
import { Usuario } from './UsuarioEntidad';
import { Viaje } from './ViajeEntidad';


@Entity()
export class ViajeDetalle extends BaseEntity {

@PrimaryGeneratedColumn()
@PrimaryColumn()
id: number;

@Column()
item_detalle: number;

@ManyToOne((type) => Viaje)
@JoinColumn([{ name: "id_viaje" }, { name: "id" }])
id_viaje: Viaje;

@ManyToOne(() => TipoDetalle, tipodetalle => tipodetalle.id)
@JoinColumn([{ name: "id_tipo_detalle" }, { name: "id" }])
id_tipo_detalle: TipoDetalle;

/*@ManyToOne(() => Empresa, empresa => empresa.id)
@JoinColumn([{ name: "id_empresa" }, { name: "id" }])
id_empresa: Empresa;*/

@Column({ type: "money" })
valor_detalle: number;

@CreateDateColumn({ type: "date" })
fecha_detalle_viaje: Date;

@Column({ type: "text" })
notas: string;

@ManyToOne(() => Usuario, usuario => usuario.id)
@JoinColumn([{ name: "id_usuario_creador" }, { name: "id" }])
id_usuario_creador: Usuario;

}

import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,OneToMany,ManyToOne,JoinColumn} from 'typeorm'
import { Empresa } from './EmpresaEntidad';
import { ViajeDetalleEntidad } from './ViajeDetalleEntidad';



@Unique(['nombre'])
@Entity()
export class TipoDetalleEntidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @Column('integer',{default: 0})
  especial: number;
  
  @ManyToOne(() => Empresa, empresa => empresa.id)
  @JoinColumn([{ name: "id_empresa" }, { name: "id" }])
  id_empresa: Empresa;

  @OneToMany(() => ViajeDetalleEntidad, viajedetalle => viajedetalle.id_tipo_detalle)
  id_tipo_detalle: ViajeDetalleEntidad[];
}
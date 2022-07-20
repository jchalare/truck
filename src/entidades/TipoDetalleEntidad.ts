
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,OneToMany,ManyToOne,JoinColumn} from 'typeorm'
import { Compania } from './CompaniaEntidad';
import { ViajeDetalle } from './ViajeDetalleEntidad';



@Unique(['nombre','id_compania'])
@Entity()
export class TipoDetalle extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @Column('integer',{default: 0})
  especial: number;
  
  @ManyToOne(() => Compania, empresa => empresa.id)
  @JoinColumn([{ name: "id_compania" }, { name: "id" }])
  id_compania: Compania;

  @OneToMany(() => ViajeDetalle, viajedetalle => viajedetalle.id_tipo_detalle)
  id_tipo_detalle: ViajeDetalle[];
}
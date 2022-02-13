
import {Entity, Column, PrimaryGeneratedColumn, Index,BaseEntity,OneToOne,JoinColumn,PrimaryColumn} from 'typeorm'
import { Usuario } from './UsuarioEntidad';


@Index(["id_usuario"], { unique: true })
@Entity()
export class Permisos extends BaseEntity {

  
  @OneToOne(() => Usuario, { primary: true, cascade: true })
  @JoinColumn({ name: 'id_usuario' })
  id_usuario: Usuario;

  @Column('boolean', {default: false})
  permiso_ver: boolean = false;
 
  @Column('boolean', {default: false})
  permiso_grabar: boolean = false;

  @Column('boolean', {default: false})
  permiso_modificar: boolean = false;

  

}
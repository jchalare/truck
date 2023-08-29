
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,ManyToOne,JoinColumn} from 'typeorm'
import { Usuario } from './UsuarioEntidad';


@Unique(['nombre'])
@Entity()
export class Departamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;
  
  @ManyToOne(() => Usuario, usuario => usuario.id)
  @JoinColumn([{ name: "id_usuario" }, { name: "id" }])
  id_usuario: Usuario;
}
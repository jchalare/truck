
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,ManyToOne,JoinColumn} from 'typeorm'
import { Usuario } from './UsuarioEntidad';


@Unique(['placa'])
@Entity()
export class Trailer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  placa: string;
  
  @ManyToOne(() => Usuario, usuario => usuario.id)
  @JoinColumn([{ name: "id_usuario" }, { name: "id" }])
  id_usuario: Usuario;
}

import {Entity, Column, PrimaryGeneratedColumn, Index,BaseEntity,ManyToOne,JoinColumn,OneToMany} from 'typeorm'
import { Compania } from './CompaniaEntidad';
import { Usuario } from './UsuarioEntidad';

@Index(["nombre", "id_compania_perfil"], { unique: true })
@Entity()
export class Perfil extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @ManyToOne((type) => Compania)
  @JoinColumn([{ name: "id_compania_perfil" }, { name: "id" }])
  id_compania_perfil: Compania;


  @OneToMany(() => Usuario, usuario => usuario.id_perfil_usuario)
  usuario: Usuario[];

}
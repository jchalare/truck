
import {Entity, Column, PrimaryGeneratedColumn, Index,BaseEntity,ManyToOne,JoinColumn,OneToMany} from 'typeorm'
import { Compania } from './CompaniaEntidad';
import { Usuario } from './UsuarioEntidad';

@Index(["nombre", "compania_"], { unique: true })
@Entity()
export class Perfil extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @ManyToOne((type) => Compania)
  @JoinColumn([{ name: "id_compania" }, { name: "id" }])
  compania_: Compania;


  @OneToMany(() => Usuario, usuario => usuario.perfil_)
  usuario: Usuario[];

}
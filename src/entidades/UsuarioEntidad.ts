
import {Entity, Column, PrimaryGeneratedColumn, 
        Unique,BaseEntity,ManyToOne,
        JoinColumn,AfterInsert,DataSource,OneToOne} from 'typeorm'
import { AppDataSource } from '../db/db';
import { Compania } from './CompaniaEntidad';
import { Perfil } from './PerfilEntidad';
import { Permisos } from './PermisosEntidad';




@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @Column()
  clave: string;

  @Column()
  email: string;

  @Column('boolean', {default: true})
  estado: boolean=true;  

  @ManyToOne(() => Perfil, perfil => perfil.id)
  @JoinColumn([{ name: "id_perfil_usuario" }, { name: "id" }])
  id_perfil_usuario: Perfil;

  @ManyToOne(() => Compania, compania => compania.id)
  @JoinColumn([{ name: "id_compania_usuario" }, { name: "id" }])
  id_compania_usuario: Compania;

  @OneToOne(() => Permisos, (permiso) => permiso.id_usuario) // specify inverse side as a second parameter
  id_usuario: Permisos
 
}
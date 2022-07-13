
import {Entity, Column, PrimaryGeneratedColumn, 
        Unique,BaseEntity,ManyToOne,
        JoinColumn,AfterInsert,getRepository } from 'typeorm'
import { Compania } from './CompaniaEntidad';
import { Perfil } from './PerfilEntidad';


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
 
  
  @AfterInsert()
  insertPermisos() {
    const objPermisos = {
      id_usuario: 1,
      permiso_ver:true,
      permiso_modificar: true,
      permiso_grabar: true

    }
    
    console.log(objPermisos)
 }
  
}
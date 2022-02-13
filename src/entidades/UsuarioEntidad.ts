
import {Entity, Column, PrimaryGeneratedColumn, 
        Unique,BaseEntity,ManyToOne,
        JoinColumn,AfterInsert,getRepository } from 'typeorm'
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

  @ManyToOne((type) => Perfil)
  @JoinColumn([{ name: "id_perfil" }, { name: "id" }])
  perfil_: Perfil;

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
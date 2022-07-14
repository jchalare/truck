
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

 
  
  @AfterInsert()
  public async insertPermisos() {


   /* const queryRunner = dataSource.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {

    const objPermisos = new Permisos();
    objPermisos.id_usuario = this.id;
    objPermisos.permiso_ver = true;
    objPermisos.permiso_modificar = true;
    objPermisos.permiso_grabar = true;

    // execute some operations on this transaction:
    await queryRunner.manager.save(objPermisos);

    // commit transaction now:
    await queryRunner.commitTransaction();
        console.log(objPermisos)

} catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
} finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
}
*/




    

    /*await dataSource.transaction(async Permisos => { 
        await Permisos.save(objPermisos);      
      });
     */
    
    //const nuevoPermiso =  getRepository(Permisos).create(objPermisos);
    //await manager.save(objPermisos); //getRepository(Permisos).save(nuevoPermiso);
        
    }
  
  
}
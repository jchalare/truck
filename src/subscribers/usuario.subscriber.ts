import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  TransactionCommitEvent,
} from 'typeorm';

import { Usuario } from '../entidades/UsuarioEntidad';
import { Permisos } from '../entidades/PermisosEntidad';

@EventSubscriber()
export class UsuarioSubscriber implements EntitySubscriberInterface<Usuario> {

  private idUsuarioNuevo: number;

  listenTo() {
    return Usuario;
  }


   afterInsert(event: InsertEvent<Usuario>) {
    this.idUsuarioNuevo = event.entity.id;
  }

   async afterTransactionCommit(event: TransactionCommitEvent ) {

    if(this.idUsuarioNuevo){

      const results = await event.manager.getRepository(Permisos).findOneBy({id_usuario:this.idUsuarioNuevo});

      if(!results){

        const objPermisos = new Permisos();
        objPermisos.id_usuario = this.idUsuarioNuevo
        objPermisos.permiso_ver = true;
        objPermisos.permiso_modificar = true;
        objPermisos.permiso_grabar = true;

        await event.manager.getRepository(Permisos).save(objPermisos);
        
      }  
    }
  }    
}
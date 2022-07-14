import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  TransactionCommitEvent,
} from 'typeorm';

import { Usuario } from '../entidades/UsuarioEntidad';
import { Permisos } from '../entidades/PermisosEntidad';
import { AppDataSource } from '../db/db';

@EventSubscriber()
export class UsuarioSubscriber implements EntitySubscriberInterface<Usuario> {
  listenTo() {
    return Usuario;
  }

  afterInsert(event: InsertEvent<Usuario>) {
    const objPermisos = new Permisos();
    //objPermisos.id_usuario = this.id;
    objPermisos.permiso_ver = true;
    objPermisos.permiso_modificar = true;
    objPermisos.permiso_grabar = true;

    // execute some operations on this transaction:
    //await queryRunner.manager.save(objPermisos);
    console.log('after inser',event);
  }

  afterTransactionCommit(event: TransactionCommitEvent ) {
        console.log(`AFTER TRANSACTION COMMITTED: `, event)
    }
}
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  TransactionCommitEvent,
} from 'typeorm';

import { User } from '../entities/UserEntity';
import { Permission } from '../entities/PermissionEntity';
import { createNewPermission } from '../services/permission.service';




@EventSubscriber()
export class UsuarioSubscriber implements EntitySubscriberInterface<User> {

  private idUsuarioNuevo: String;

  listenTo() {
    return User;
  }


  afterInsert(event: InsertEvent<User>) {
    this.idUsuarioNuevo = event.entity.id;
  }

  async afterTransactionCommit(event: TransactionCommitEvent) {

    if (this.idUsuarioNuevo) {

      const results = await event.manager.getRepository(Permission).findOneBy({ id: String(this.idUsuarioNuevo) });

      if (!results) {

        /*const objPermisos = new Permission();
        objPermisos.id_user = String(this.idUsuarioNuevo)
        objPermisos.permiso_ver = true;
        objPermisos.permiso_modificar = true;
        objPermisos.permiso_grabar = true;*/

        const objPermission = {
          id_user: String(this.idUsuarioNuevo),
          to_see: true,
          to_save: false,
          to_update: false
        }

        await createNewPermission(objPermission);
        //await event.manager.getRepository(Permission).save(objPermission);

      }
    }
  }
}
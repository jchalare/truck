
import {Entity, Column, PrimaryGeneratedColumn, 
        BaseEntity,ManyToOne,
        JoinColumn,OneToOne} from 'typeorm'
import { Compania } from './CompaniaEntidad';
import { Permisos } from './PermisosEntidad';
import { Profile } from './ProfileEntity';


@Entity('users')
export class User extends BaseEntity {
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

  @ManyToOne(() => Profile, profile => profile.id)
  @JoinColumn([{ name: "id_profile" }, { name: "id" }])
  id_profile: Profile;

  @ManyToOne(() => Compania, compania => compania.id)
  @JoinColumn([{ name: "id_compania_usuario" }, { name: "id" }])
  id_compania_usuario: Compania;

  @OneToOne(() => Permisos, (permiso) => permiso.id_usuario) // specify inverse side as a second parameter
  id_usuario: Permisos
 
}
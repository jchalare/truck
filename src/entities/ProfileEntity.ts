
import {Entity, Column, PrimaryGeneratedColumn, Index,BaseEntity,ManyToOne,JoinColumn,OneToMany} from 'typeorm'
import { Compania } from './CompaniaEntidad';
import { User } from './UserEntity';

@Index(["nombre", "id_compania_perfil"], { unique: true })
@Entity('profiles')
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @ManyToOne((type) => Compania)
  @JoinColumn([{ name: "id_compania_perfil" }, { name: "id" }])
  id_compania_perfil: Compania;


  @OneToMany(() => User, user => user.id_profile)
  user: User[];

}
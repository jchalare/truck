
import {Entity, Column, PrimaryGeneratedColumn, Index,BaseEntity,ManyToOne,JoinColumn,OneToMany} from 'typeorm'
import { User } from './UserEntity';
import { Company } from './CompanyEntity';

@Index(["nombre", "id_compania_perfil"], { unique: true })
@Entity('profiles')
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @ManyToOne(() => Company, company => company.id)
  @JoinColumn([{ name: "id_company" }, { name: "id" }])
  id_company: Company;


  @OneToMany(() => User, user => user.id_profile)
  user: User[];

}
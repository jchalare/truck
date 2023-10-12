
import {
  Entity, Column, PrimaryGeneratedColumn,
  BaseEntity, ManyToOne,
  JoinColumn, OneToOne
} from 'typeorm'
import { Profile } from './ProfileEntity';
import { Permission } from './PermissionEntity';
import { Company } from './CompanyEntity';


@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false })
  password: string;

  @Column('varchar', { nullable: false, unique: true })
  email: string;

  @Column('boolean', { default: true })
  state: boolean;

  @ManyToOne(() => Profile, profile => profile.id)
  @JoinColumn([{ name: "id_profile" }, { name: "id" }])
  id_profile: Profile;

  @ManyToOne(() => Company, company => company.id)
  @JoinColumn([{ name: "id_company" }, { name: "id" }])
  id_company: Company;

  @OneToOne(() => Permission, (permission) => permission.id_user) // specify inverse side as a second parameter
  id_user: Permission

}
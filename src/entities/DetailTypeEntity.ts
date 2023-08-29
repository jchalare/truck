
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,OneToMany,ManyToOne,JoinColumn} from 'typeorm'
import { Company } from './CompanyEntity';
import { User } from './UserEntity';
import { DetailTrip } from './DetailTripEntity';



@Unique(['name','id_company'])
@Entity('detail_types')
export class DetailType extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('varchar', { nullable: false,unique:false })
  name: string;

  @Column('boolean',{default: false})
  special: boolean;
  
  @ManyToOne(() => Company, company => company.id)
  @JoinColumn([{ name: "id_company" }, { name: "id" }])
  id_company: Company;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn([{ name: "id_user" }, { name: "id" }])
  id_user: User;

  @OneToMany(() => DetailTrip, detailTrip => detailTrip.id)
  id_detail_trip: DetailTrip[];
}
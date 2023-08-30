import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity, OneToMany ,ManyToOne, JoinColumn} from 'typeorm'
import { Trip } from './TripEntity';
import { City } from './CityEntity';

@Entity('factories')
export class Factory extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('varchar', { nullable: false,unique:false })
  name: string;

  @Column('varchar', { nullable: false,unique:true })
  nit: string;

  @Column('varchar', { nullable: false,unique:false })
  contact: string;

  @Column('varchar', { nullable: false,unique:false })
  phone_number: string;

  @Column('varchar', { nullable: true,unique:false })
  address: string;

   @ManyToOne(() => City, city => city.id)
  @JoinColumn([{ name: "id_city" }, { name: "id" }])
  id_city: City;
  
  @OneToMany(() => Trip, trip => trip.id)
  trip: Trip[];
  
}
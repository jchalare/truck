
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,ManyToOne,JoinColumn,OneToMany } from 'typeorm'
import { City } from './CityEntity';
import { Trip } from './TripEntity';

@Entity('drivers')
export class Driver extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false,unique:true })
  id_number: string;
  
  @Column('varchar', { nullable: false })
  first_name: string;

  @Column('varchar', { nullable: false })
  last_name: string;

  @Column('varchar', { nullable: false,unique:true })
  account_number: string;

  @Column('text', {default: null})
  email: string;

  @ManyToOne(() => City, city => city.id)
  @JoinColumn([{ name: "id_city" }, { name: "id" }])
  id_city: City;

  @Column('text', {default: null})
  address: string;
  
  @Column('varchar', {default: null})
  phone_number: string;

  @OneToMany(() => Trip, trip => trip.id_driver)
  id_driver: Trip[];

  
}
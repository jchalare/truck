import {Entity, Column, PrimaryGeneratedColumn, 
        Unique,BaseEntity,ManyToOne,PrimaryColumn,
        CreateDateColumn, Double,JoinColumn,
        OneToMany } from 'typeorm'

import { Vehicle } from './VehicleEntity';
import { City } from './CityEntity';
import { User } from './UserEntity';
import { Company } from './CompanyEntity';
import { Driver } from './DriverEntity';
import { Factory } from './FactoryEntity';


@Entity('trips')
export class Trip extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { nullable: false, unique:true })
  trip_number: string;
  
  @ManyToOne(() => Vehicle, vehicle => vehicle.id)
  @JoinColumn([{ name: "id_vehicle" }, { name: "id" }])
  id_vehicle: Vehicle;

  @ManyToOne(() => Factory, factory => factory.id)
  @JoinColumn([{ name: "id_factory" }, { name: "id" }])
  id_factory: Factory;

  @ManyToOne(() => City, city => city.id)
  @JoinColumn([{ name: "id_city_origin" }, { name: "id" }])
  id_city_origin: City;

   @ManyToOne(() => City, city => city.id)
  @JoinColumn([{ name: "id_city_destination" }, { name: "id" }])
  id_city_destination: City;

  @ManyToOne(() => Driver, driver => driver.id)
  @JoinColumn([{ name: "id_driver" }, { name: "id" }])
  id_driver: Driver;

  @Column({ type: "numeric",nullable: false,default:0 })
  freight_value: number;

  @Column({ type: "numeric",nullable: false,default:0 })
  advance_value: number;
  
  @Column({ type: "numeric" ,nullable: false,default:0})
  total_value: number;

  @Column({ type: "numeric",nullable: false,default:0 })
  real_value: number;

  @CreateDateColumn({ type: "date" })
  trip_date: Date;

  @CreateDateColumn({ type: "date" ,nullable:true})
  paid_date: Date;

  @Column('boolean', {default: false})
  is_paid: boolean;

  @Column({ type: "text", nullable:true })
  notes: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn([{ name: "id_user" }, { name: "id" }])
  id_user: User;


  @ManyToOne(() => Company, company => company.id)
  @JoinColumn([{ name: "id_company" }, { name: "id" }])
  id_company: Company;


}
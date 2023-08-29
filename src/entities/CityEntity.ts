
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,OneToMany,ManyToOne,JoinColumn} from 'typeorm'
import { Department } from './DepartamentEntity';
import { Trip } from './TripEntity';
import { Driver } from './DriverEntity';


@Unique(['name','id_department'])
@Entity('cities')
export class City extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column('varchar', { nullable: false })
  name: string; 

  @ManyToOne(() => Department, department => department.id)
  @JoinColumn([{ name: "id_department" }, { name: "id" }])
  id_department: Department;

  @OneToMany(() => Trip, trip => trip.id)
  id_origin_trip: Trip[];

  @OneToMany(() => Trip, trip => trip.id)
  id_destination_trip: Trip[];

  @OneToMany(() => Driver, driver => driver.id)
  id_driver: Driver[];
}
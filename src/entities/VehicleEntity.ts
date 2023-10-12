
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,PrimaryColumn,OneToMany } from 'typeorm'
import { Trip } from './TripEntity';

@Entity('vehicles')
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false, unique:true })
  plate: string;

  @OneToMany(() => Trip, trip => trip.trip_number)
  travel: Trip[];
    
}
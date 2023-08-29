
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity,PrimaryColumn,OneToMany } from 'typeorm'
import { Travel } from './TravelEntity';

@Entity('vehicles')
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false, unique:true })
  plate: string;

  @OneToMany(() => Travel, travel => travel.travel_number)
  travel: Travel[];
    
}
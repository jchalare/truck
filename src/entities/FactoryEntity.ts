import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity, OneToMany ,ManyToOne, JoinColumn} from 'typeorm'
import { Trip } from './TripEntity';

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
  
  @OneToMany(() => Trip, trip => trip.id)
  trip: Trip[];
  
}
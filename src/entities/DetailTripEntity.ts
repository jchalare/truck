
import {Entity, Column, PrimaryGeneratedColumn, 
    Unique,BaseEntity,ManyToOne,PrimaryColumn,
    CreateDateColumn, Double,JoinColumn,
    OneToMany } from 'typeorm'

import { User } from './UserEntity';
import { Trip } from './TripEntity';
import { DetailType } from './DetailTypeEntity';


@Entity('detail_trips')
export class DetailTrip extends BaseEntity {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
item_detail: number;

@ManyToOne(() => Trip, trip => trip.id)
@JoinColumn([{ name: "id_trip" }, { name: "id" }])
id_trip: Trip;

@ManyToOne(() => DetailType, detailType => detailType.id)
@JoinColumn([{ name: "id_detail_type" }, { name: "id" }])
id_detail_type: DetailType;

/*@ManyToOne(() => Empresa, empresa => empresa.id)
@JoinColumn([{ name: "id_empresa" }, { name: "id" }])
id_empresa: Empresa;*/

@Column({ type: "money" ,default:0})
detail_value: number;

@CreateDateColumn({ type: "date" })
detail_date: Date;

@Column({ type: "text" })
notes: string;

@ManyToOne(() => User, user => user.id)
@JoinColumn([{ name: "id_user" }, { name: "id" }])
id_user: User;

}
import {Entity, Column, PrimaryGeneratedColumn, 
    Unique,BaseEntity,ManyToOne,PrimaryColumn,
    CreateDateColumn, Double,JoinColumn,
    OneToMany } from 'typeorm'
import { Vehicle } from './VehicleEntity';
import { DetailType } from './DetailTypeEntity';
import { User } from './UserEntity';

@Entity('expenses')
export class Expense extends BaseEntity {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column('integer', { nullable: false})
item_detalle: number;

@ManyToOne(() => Vehicle, vehicle => vehicle.id)
@JoinColumn([{ name: "id_vehicle" }, { name: "id" }])
id_vehicle: Vehicle;

@ManyToOne(() => DetailType, detailType => detailType.id)
@JoinColumn([{ name: "id_detailType" }, { name: "id" }])
id_detailType: DetailType;

@Column({ type: "money",default:0 })
expense_value: number;

@CreateDateColumn({ type: "date" })
expense_date: Date;

@Column({ type: "text" })
notes: string;

@ManyToOne(() => User, user => user.id)
@JoinColumn([{ name: "id_user" }, { name: "id" }])
id_user: User;

}
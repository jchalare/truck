
import {Entity, Column, PrimaryGeneratedColumn, Unique,BaseEntity, OneToMany} from 'typeorm'
import { Manifiesto } from './ManifiestoEntidad';


@Unique(['nombre'])
@Entity()
export class Empresa extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @Column()
  responsable: string;

  @Column()
  telefono: string;

  @OneToMany(() => Manifiesto, manifiesto => manifiesto.empresa_)
  manifiesto: Manifiesto[];
  
}
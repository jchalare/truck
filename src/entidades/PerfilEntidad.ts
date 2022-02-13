
import {Entity, Column, PrimaryGeneratedColumn, Index,BaseEntity,ManyToOne,JoinColumn} from 'typeorm'
import { Compania } from './CompaniaEntidad';

@Index(["nombre", "compania_"], { unique: true })
@Entity()
export class Perfil extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @ManyToOne((type) => Compania)
  @JoinColumn([{ name: "id_compania" }, { name: "id" }])
  compania_: Compania;


}
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export default class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id?: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum StudentCourse {
  CC = 'cc',
  SI = 'si',
  ECOMP = 'ecomp',
  ENGSOFT = 'engsoft',
  TADS = 'tads',
  TRC = 'trc'
}

export enum StudentStatus {
  ACTIVE = 'ativo',
  INACTIVE = 'inativo'
}

@Entity({ name: 'tb_student' })
export class MySQLStudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: false
  })
  rga!: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: 'nome'
  })
  name!: string;

  @Column({
    type: 'enum',
    enum: StudentCourse,
    nullable: false,
    name: 'curso'
  })
  course!: string;

  @Column({
    type: 'enum',
    enum: StudentStatus,
    nullable: false,
    name: 'situacao'
  })
  status!: string;

  @Column({
    type: 'datetime',
    nullable: false,
    default: () => 'NOW()',
    name: 'registrado_em'
  })
  registeredIn!: Date;
}

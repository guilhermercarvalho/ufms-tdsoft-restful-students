import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_student' })
export class SQLiteStudentEntity {
  @PrimaryGeneratedColumn('rowid')
  id!: number;

  @Column({
    type: 'text',
    length: 15,
    nullable: false
  })
  rga!: string;

  @Column({
    type: 'text',
    length: 255,
    nullable: false,
    name: 'nome'
  })
  name!: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'curso'
  })
  course!: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'situacao'
  })
  status!: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'registrado_em',
    default: new Date().toString()
  })
  registeredIn!: Date;
}

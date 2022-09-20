import { StudentCourse, StudentStatus } from '@/domain/entities';

import { DateTime } from 'luxon';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_aluno' })
export class SQLiteStudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    length: 15,
    nullable: false
  })
  rga: string;

  @Column({
    type: 'text',
    length: 255,
    nullable: false,
    name: 'nome'
  })
  name: string;

  @Column({
    type: 'text',
    enum: StudentCourse,
    nullable: false,
    name: 'curso'
  })
  course: string;

  @Column({
    type: 'text',
    enum: StudentStatus,
    nullable: false,
    name: 'situacao',
    default: StudentStatus.ACTIVE
  })
  status: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'registrado_em',
    default: DateTime.utc().toFormat('yyyy-MM-dd HH:mm:ss')
  })
  registeredIn: Date;
}

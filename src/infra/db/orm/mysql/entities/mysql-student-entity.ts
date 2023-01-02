import { StudentCourse, StudentStatus } from '@/domain/entities';

import { DateTime } from 'luxon';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_student' })
export class MySQLStudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: false,
    unique: true
  })
  rga: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: 'nome'
  })
  name: string;

  @Column({
    type: 'enum',
    enum: StudentCourse,
    nullable: false,
    name: 'curso'
  })
  course: string;

  @Column({
    type: 'enum',
    enum: StudentStatus,
    nullable: false,
    default: StudentStatus.ACTIVE,
    name: 'situacao'
  })
  status: string;

  @Column({
    type: 'datetime',
    nullable: false,
    default: DateTime.utc().toFormat('yyyy-MM-dd HH:mm:ss'),
    name: 'registrado_em'
  })
  registeredIn: Date;
}

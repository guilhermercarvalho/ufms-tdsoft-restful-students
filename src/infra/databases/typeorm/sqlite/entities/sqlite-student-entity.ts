import { StudentCourse, StudentStatus } from 'core/entities';
import { DateTime } from 'luxon';
import config from 'main/config/env';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_student' })
export class SQLiteStudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

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
    enum: StudentCourse,
    nullable: false,
    name: 'curso'
  })
  course!: string;

  @Column({
    type: 'text',
    enum: StudentStatus,
    nullable: false,
    default: StudentStatus.ACTIVE,
    name: 'situacao'
  })
  status!: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'registrado_em',
    default: DateTime.now()
      .setZone(config.timeZone)
      .toFormat('yyyy-MM-dd HH:mm:ss')
  })
  registeredIn!: Date;
}

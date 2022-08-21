import { StudentCourse, StudentStatus } from 'core/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import config from 'main/config/env';
import { DateTime } from 'luxon';

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
    default: StudentStatus.ACTIVE,
    name: 'situacao'
  })
  status!: string;

  @Column({
    type: 'datetime',
    nullable: false,
    default: DateTime.now()
      .setZone(config.timeZone)
      .toFormat('yyyy-MM-dd HH:mm:ss'),
    name: 'registrado_em'
  })
  registeredIn!: Date;
}

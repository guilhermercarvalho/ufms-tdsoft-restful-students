import { StudentCourse, StudentStatus } from 'core/entities';
import config from 'main/config/env';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_student' })
export class PostgresStudentEntity {
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
    type: 'timestamp without time zone',
    nullable: false,
    default: new Date().toLocaleString('en-US', {
      timeZone: config.timeZone
    }),
    name: 'registrado_em'
  })
  registeredIn!: Date;
}

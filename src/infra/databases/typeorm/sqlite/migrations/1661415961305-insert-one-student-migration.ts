import { DateTime } from 'luxon';
import env from '../../../../../main/config/env';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { SQLiteStudentEntity } from '../entities';

export class insertOneStudentMigration1661415961305
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.insert(SQLiteStudentEntity, {
      id: 'f6f3b501-6e39-4365-b3b0-ee43febe4f34',
      rga: '2019.6820.654-4',
      name: 'Pedro Luciano',
      course: 'trc',
      status: 'ativo',
      registeredIn: DateTime.fromFormat(
        '2019-03-17 22:18:22',
        'yyyy-MM-dd HH:mm:ss'
      )
        .setZone(env.timeZone)
        .toFormat('yyyy-MM-dd HH:mm:ss')
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(SQLiteStudentEntity, {
      id: 'f6f3b501-6e39-4365-b3b0-ee43febe4f34'
    });
  }
}

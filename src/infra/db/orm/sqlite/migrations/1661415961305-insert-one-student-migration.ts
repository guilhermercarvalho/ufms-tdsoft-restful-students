import { SQLiteStudentEntity } from '@/infra/db/orm/entities';

import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertOneStudentMigration1661415961305
  implements MigrationInterface
{
  name = 'insertOneStudentMigration1661415961305';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(SQLiteStudentEntity, {
      id: 'f6f3b501-6e39-4365-b3b0-ee43febe4f34',
      rga: '2019.6820.654-4',
      name: 'Pedro Luciano',
      course: 'trc',
      status: 'ativo',
      registeredIn: '2019-03-17 22:18:22'
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(SQLiteStudentEntity, {
      id: 'f6f3b501-6e39-4365-b3b0-ee43febe4f34'
    });
  }
}

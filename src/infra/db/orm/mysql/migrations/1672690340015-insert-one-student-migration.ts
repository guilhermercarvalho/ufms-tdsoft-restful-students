import { MySQLStudentEntity } from '@/infra/db/orm/mysql/entities';

import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertOneStudentMigration1672690340015
  implements MigrationInterface
{
  name = 'insertOneStudentMigration1672690340015';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(MySQLStudentEntity, {
      id: 'f6f3b501-6e39-4365-b3b0-ee43febe4f34',
      rga: '2019.6820.654-4',
      name: 'Pedro Luciano',
      course: 'trc',
      status: 'ativo',
      registeredIn: '2019-03-17 22:18:22'
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(MySQLStudentEntity, {
      id: 'f6f3b501-6e39-4365-b3b0-ee43febe4f34'
    });
  }
}

import { PostgresStudentEntity } from '@/infra/db/orm/entities';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertOneStudentMigration1672699728389
  implements MigrationInterface
{
  name = 'insertOneStudentMigration1672699728389';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(PostgresStudentEntity, {
      id: 'f6f3b501-6e39-4365-b3b0-ee43febe4f34',
      rga: '2019.6820.654-4',
      name: 'Pedro Luciano',
      course: 'trc',
      status: 'ativo',
      registeredIn: '2019-03-17 22:18:22'
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(PostgresStudentEntity, {
      id: 'f6f3b501-6e39-4365-b3b0-ee43febe4f34'
    });
  }
}

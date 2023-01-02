import { MigrationInterface, QueryRunner } from 'typeorm';

export class enableUuidMigration1672699647490 implements MigrationInterface {
  name = 'enableUuidMigration1672699647490';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp";');
  }
}

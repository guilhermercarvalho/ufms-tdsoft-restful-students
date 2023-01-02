import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableMigration1672690077119 implements MigrationInterface {
  name = 'createTableMigration1672690077119';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE tb_student (
        id VARCHAR(36),
        rga VARCHAR(15) UNIQUE NOT NULL,
        nome VARCHAR(255) NOT NULL,
        curso ENUM ('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc') NOT NULL,
        situacao ENUM ('ativo', 'inativo') NOT NULL,
        registrado_em DATETIME NOT NULL,
        PRIMARY KEY (id)
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS tb_student;');
  }
}

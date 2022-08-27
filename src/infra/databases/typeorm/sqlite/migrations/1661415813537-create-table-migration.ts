import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableMigration1661415813537 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE tb_aluno (
        id TEXT CHECK(LENGTH(id) == 36) PRIMARY KEY,
        rga TEXT CHECK(LENGTH(rga) == 15) NOT NULL UNIQUE,
        nome TEXT CHECK(LENGTH(nome) <= 255) NOT NULL,
        curso TEXT CHECK(
          curso IN ('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc')
        ) NOT NULL,
        situacao TEXT CHECK(situacao IN ('ativo', 'inativo')) NOT NULL DEFAULT 'ativo',
        registrado_em TEXT NOT NULL
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS tb_aluno;`);
  }
}

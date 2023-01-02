import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableMigration1672699701660 implements MigrationInterface {
  name = 'createTableMigration1672699701660';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE curso_enum AS ENUM ('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc');`
    );
    await queryRunner.query(
      `CREATE TYPE situacao_enum AS ENUM ('ativo', 'inativo');`
    );
    await queryRunner.query(
      `CREATE TABLE tb_aluno (
            id uuid DEFAULT uuid_generate_v4 (),
            rga VARCHAR(15) UNIQUE NOT NULL,
            nome VARCHAR(255) NOT NULL,
            curso curso_enum NOT NULL,
            situacao situacao_enum NOT NULL,
            registrado_em TIMESTAMP NOT NULL,
            PRIMARY KEY (id)
        );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TYPE IF EXISTS curso_enum CASCADE;');
    await queryRunner.query('DROP TYPE IF EXISTS situacao_enum CASCADE;');
    await queryRunner.query('DROP TABLE IF EXISTS tb_aluno;');
  }
}

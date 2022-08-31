import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableMigration1661580881878 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS \`tb_aluno\``);

    await queryRunner.query(
      `CREATE TABLE \`tb_aluno\` (
        \`id\` varchar(36) NOT NULL,
        \`rga\` varchar(15) NOT NULL,
        \`nome\` varchar(255) NOT NULL,
        \`curso\` enum ('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc') NOT NULL,
        \`situacao\` enum ('ativo', 'inativo') NOT NULL DEFAULT 'ativo',
        \`registrado_em\` datetime NOT NULL DEFAULT NOW(),
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`tb_aluno\``);
  }
}

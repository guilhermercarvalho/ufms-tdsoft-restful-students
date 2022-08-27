import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableMigration1661578118259 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."tb_aluno_curso_enum" AS ENUM('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc')`
    );
    await queryRunner.query(
      `CREATE TYPE "public"."tb_aluno_situacao_enum" AS ENUM('ativo', 'inativo')`
    );
    await queryRunner.query(
      `CREATE TABLE "tb_aluno" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "rga" character varying(15) NOT NULL,
        "nome" character varying(255) NOT NULL,
        "curso" "public"."tb_aluno_curso_enum" NOT NULL,
        "situacao" "public"."tb_aluno_situacao_enum" NOT NULL DEFAULT 'ativo',
        "registrado_em" TIMESTAMP NOT NULL,
        CONSTRAINT "PK_9b4d8f55abad02a5332d5700c9d" PRIMARY KEY ("id")
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_aluno"`);
    await queryRunner.query(`DROP TYPE "public"."tb_aluno_situacao_enum"`);
    await queryRunner.query(`DROP TYPE "public"."tb_aluno_curso_enum"`);
  }
}

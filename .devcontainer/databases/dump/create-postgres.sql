CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TYPE IF EXISTS curso_enum CASCADE;
DROP TYPE IF EXISTS situacao_enum CASCADE;

DROP TABLE IF EXISTS tb_student;

CREATE TYPE curso_enum AS ENUM ('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc');
CREATE TYPE situacao_enum AS ENUM ('ativo', 'inativo');

CREATE TABLE tb_student (
  id uuid DEFAULT uuid_generate_v4 (),
  rga VARCHAR(15) UNIQUE NOT NULL,
  nome VARCHAR(255) NOT NULL,
  curso curso_enum NOT NULL,
  situacao situacao_enum NOT NULL,
  registrado_em TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO tb_student (id, rga, nome, curso, situacao, registrado_em)
VALUES (
    'f6f3b501-6e39-4365-b3b0-ee43febe4f34',
    '2019.6820.654-4',
    'Pedro Luciano',
    'trc',
    'ativo',
    '2019-03-17 22:18:22'
  );
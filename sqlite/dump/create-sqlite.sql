DROP TABLE IF EXISTS tb_student;

CREATE TABLE tb_student (
  id TEXT CHECK(LENGTH(id) == 36) PRIMARY KEY,
  rga TEXT CHECK(LENGTH(rga) == 15) NOT NULL UNIQUE,
  nome TEXT CHECK(LENGTH(nome) <= 255) NOT NULL,
  curso TEXT CHECK(
    curso IN ('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc')
  ) NOT NULL,
  situacao TEXT CHECK(situacao IN ('ativo', 'inativo')) NOT NULL DEFAULT 'ativo',
  registrado_em TEXT NOT NULL
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
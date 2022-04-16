DROP TABLE IF EXISTS tb_student;

CREATE TABLE tb_student (
  id INTEGER PRIMARY KEY,
  rga TEXT CHECK(LENGTH(rga) == 15) NOT NULL UNIQUE,
  nome TEXT CHECK(LENGTH(nome) <= 255) NOT NULL,
  curso TEXT CHECK(
    curso IN ('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc')
  ) NOT NULL DEFAULT 'ativo',
  situacao TEXT CHECK(situacao IN ('ativo', 'inativo')) NOT NULL,
  registrado_em TEXT NOT NULL
);

INSERT INTO tb_student (id, rga, nome, curso, situacao, registrado_em)
VALUES (
    1,
    '2019.6820.654-4',
    'Pedro Luciano',
    'trc',
    'ativo',
    '2019-03-17 22:18:22'
  );
DROP TABLE IF EXISTS tb_aluno;

CREATE TABLE tb_aluno (
  id VARCHAR(36),
  rga VARCHAR(15) UNIQUE NOT NULL,
  nome VARCHAR(255) NOT NULL,
  curso ENUM ('cc', 'si', 'ecomp', 'engsoft', 'tads', 'trc') NOT NULL,
  situacao ENUM ('ativo', 'inativo') NOT NULL,
  registrado_em DATETIME NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO tb_aluno (id, rga, nome, curso, situacao, registrado_em)
VALUES (
    'f6f3b501-6e39-4365-b3b0-ee43febe4f34',
    '2019.6820.654-4',
    'Guilherme Luciano',
    'trc',
    'ativo',
    '2019-03-17 22:18:22'
  );

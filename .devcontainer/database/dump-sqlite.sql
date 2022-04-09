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

INSERT INTO tb_student (id, rga, nome, curso, situacao, registrado_em) VALUES (1, '2019.6820.654-4', 'Pedro Luciano', 'trc', 'ativo', '2019-03-17 22:18:22');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('2982.6820.246-8', 'Corbet Pohlak', 'trc', 'ativo', '2019-03-17 22:18:22');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('3892.2871.221-4', 'Norry Eliasson', 'si', 'inativo', '2019-04-08 12:19:15');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('1235.4526.699-9', 'Harley Balling', 'trc', 'ativo', '2020-01-11 17:16:40');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('4695.0096.673-3', 'Sayre Clinkard', 'cc', 'inativo', '2019-05-06 02:57:17');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('2819.8669.423-3', 'Osgood Crockford', 'si', 'ativo', '2019-07-03 01:59:54');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('4990.4660.707-1', 'Mel Hayton', 'engsoft', 'inativo', '2020-01-26 10:20:38');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('2414.9650.399-8', 'Melicent Clunan', 'trc', 'inativo', '2019-10-11 10:50:04');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('3447.8321.604-5', 'Immanuel Bilton', 'si', 'inativo', '2019-08-24 07:27:43');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('3270.5022.756-0', 'Patrizia Lunck', 'trc', 'inativo', '2019-06-20 09:38:23');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('3111.1597.196-3', 'Tripp Crab', 'engsoft', 'inativo', '2019-03-03 11:51:48');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('4279.3723.789-5', 'Emmett Doley', 'trc', 'ativo', '2019-09-22 00:12:14');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('6974.5419.869-4', 'Poul Swann', 'engsoft', 'ativo', '2020-01-02 23:18:37');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('1185.5415.777-4', 'Kerk Salsberg', 'trc', 'ativo', '2020-01-31 02:48:51');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('5998.0225.504-4', 'Tait Sheryn', 'ecomp', 'ativo', '2019-06-06 18:33:42');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('9770.6097.275-3', 'Urson Brandli', 'tads', 'inativo', '2020-01-27 12:07:08');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('2910.6977.675-7', 'Ursulina Phoebe', 'si', 'inativo', '2019-11-13 03:40:42');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('5513.7691.743-3', 'Sidonia MacDwyer', 'trc', 'ativo', '2019-11-08 12:55:45');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('6422.9446.991-9', 'Fitzgerald Scone', 'si', 'ativo', '2019-04-22 14:22:48');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('4515.2139.276-0', 'Michael Balls', 'tads', 'inativo', '2020-01-04 01:48:34');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('7049.8624.012-1', 'Adaline Sieb', 'tads', 'ativo', '2019-10-19 09:47:59');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('5764.6499.523-0', 'Locke Rizzi', 'tads', 'inativo', '2019-05-07 18:13:02');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('5081.2963.119-1', 'Mercie Moodycliffe', 'trc', 'ativo', '2019-03-07 02:46:09');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('9382.5720.192-9', 'Julio Carnie', 'tads', 'ativo', '2020-01-05 16:35:58');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('7952.5001.621-6', 'Jobye Ferreres', 'trc', 'ativo', '2019-04-25 02:19:39');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('7269.7606.820-7', 'Arleyne Bandt', 'engsoft', 'inativo', '2019-12-11 23:52:29');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('2693.1129.900-5', 'Roman Inge', 'tads', 'inativo', '2019-08-21 14:45:03');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('3353.2187.304-2', 'Marty Northall', 'ecomp', 'ativo', '2019-11-30 07:50:29');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('4218.2443.183-7', 'Jaimie Fowden', 'ecomp', 'ativo', '2019-11-28 13:33:59');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('3600.9969.189-7', 'Jorey Samter', 'si', 'inativo', '2019-12-12 06:05:17');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('4151.6328.172-9', 'Sheree Heining', 'tads', 'inativo', '2019-03-23 03:48:53');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('9903.3830.659-1', 'Sallyann Camber', 'cc', 'inativo', '2019-11-23 18:45:25');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('0731.9464.258-7', 'Roselia Sturge', 'trc', 'ativo', '2019-03-01 10:18:00');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('0148.5176.796-8', 'Jo-ann Jacmard', 'cc', 'inativo', '2019-05-27 19:28:39');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('2070.2079.183-0', 'Jarrid Clarkin', 'si', 'inativo', '2019-06-17 19:24:21');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('3787.2328.565-4', 'Hamid Jancar', 'trc', 'inativo', '2019-12-18 14:19:15');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('9004.9124.567-2', 'Aurore Rambadt', 'cc', 'ativo', '2019-12-31 16:20:44');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('9808.8114.805-3', 'Michelina Moiser', 'trc', 'ativo', '2020-01-14 20:40:23');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('1751.6587.521-0', 'Tandy Woodfield', 'si', 'ativo', '2019-07-01 04:24:25');
INSERT INTO tb_student (rga, nome, curso, situacao, registrado_em) VALUES ('8744.9056.019-1', 'Doe Liddel', 'cc', 'ativo', '2019-10-11 23:10:52');
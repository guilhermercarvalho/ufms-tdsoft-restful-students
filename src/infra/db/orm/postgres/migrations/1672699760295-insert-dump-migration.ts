import { PostgresStudentEntity } from '@/infra/db/orm/entities';

import { Equal, MigrationInterface, Not, QueryRunner } from 'typeorm';

export class insertDumpMigration1672699760295 implements MigrationInterface {
  name = 'insertDumpMigration1672699760295';

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.insert(PostgresStudentEntity, [
      {
        rga: '2982.6820.246-8',
        name: 'Corbet Pohlak',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-03-17 22:18:22'
      },
      {
        rga: '3892.2871.221-4',
        name: 'Norry Eliasson',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-04-08 12:19:15'
      },
      {
        rga: '1235.4526.699-9',
        name: 'Harley Balling',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2020-01-11 17:16:40'
      },
      {
        rga: '4695.0096.673-3',
        name: 'Sayre Clinkard',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-05-06 02:57:17'
      },
      {
        rga: '2819.8669.423-3',
        name: 'Osgood Crockford',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-07-03 01:59:54'
      },
      {
        rga: '4990.4660.707-1',
        name: 'Mel Hayton',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2020-01-26 10:20:38'
      },
      {
        rga: '2414.9650.399-8',
        name: 'Melicent Clunan',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-10-11 10:50:04'
      },
      {
        rga: '3447.8321.604-5',
        name: 'Immanuel Bilton',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-08-24 07:27:43'
      },
      {
        rga: '3270.5022.756-0',
        name: 'Patrizia Lunck',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-06-20 09:38:23'
      },
      {
        rga: '3111.1597.196-3',
        name: 'Tripp Crab',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-03-03 11:51:48'
      },
      {
        rga: '4279.3723.789-5',
        name: 'Emmett Doley',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-09-22 00:12:14'
      },
      {
        rga: '6974.5419.869-4',
        name: 'Poul Swann',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2020-01-02 23:18:37'
      },
      {
        rga: '1185.5415.777-4',
        name: 'Kerk Salsberg',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2020-01-31 02:48:51'
      },
      {
        rga: '5998.0225.504-4',
        name: 'Tait Sheryn',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-06-06 18:33:42'
      },
      {
        rga: '9770.6097.275-3',
        name: 'Urson Brandli',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2020-01-27 12:07:08'
      },
      {
        rga: '2910.6977.675-7',
        name: 'Ursulina Phoebe',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-11-13 03:40:42'
      },
      {
        rga: '5513.7691.743-3',
        name: 'Sidonia MacDwyer',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-11-08 12:55:45'
      },
      {
        rga: '6422.9446.991-9',
        name: 'Fitzgerald Scone',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-04-22 14:22:48'
      },
      {
        rga: '4515.2139.276-0',
        name: 'Michael Balls',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2020-01-04 01:48:34'
      },
      {
        rga: '7049.8624.012-1',
        name: 'Adaline Sieb',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-10-19 09:47:59'
      },
      {
        rga: '5764.6499.523-0',
        name: 'Locke Rizzi',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-05-07 18:13:02'
      },
      {
        rga: '5081.2963.119-1',
        name: 'Mercie Moodycliffe',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-03-07 02:46:09'
      },
      {
        rga: '9382.5720.192-9',
        name: 'Julio Carnie',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2020-01-05 16:35:58'
      },
      {
        rga: '7952.5001.621-6',
        name: 'Jobye Ferreres',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-04-25 02:19:39'
      },
      {
        rga: '7269.7606.820-7',
        name: 'Arleyne Bandt',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-12-11 23:52:29'
      },
      {
        rga: '2693.1129.900-5',
        name: 'Roman Inge',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-08-21 14:45:03'
      },
      {
        rga: '3353.2187.304-2',
        name: 'Marty Northall',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-11-30 07:50:29'
      },
      {
        rga: '4218.2443.183-7',
        name: 'Jaimie Fowden',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-11-28 13:33:59'
      },
      {
        rga: '3600.9969.189-7',
        name: 'Jorey Samter',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-12-12 06:05:17'
      },
      {
        rga: '4151.6328.172-9',
        name: 'Sheree Heining',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-03-23 03:48:53'
      },
      {
        rga: '9903.3830.659-1',
        name: 'Sallyann Camber',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-11-23 18:45:25'
      },
      {
        rga: '0731.9464.258-7',
        name: 'Roselia Sturge',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-03-01 10:18:00'
      },
      {
        rga: '0148.5176.796-8',
        name: 'Jo-ann Jacmard',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-05-27 19:28:39'
      },
      {
        rga: '2070.2079.183-0',
        name: 'Jarrid Clarkin',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-06-17 19:24:21'
      },
      {
        rga: '3787.2328.565-4',
        name: 'Hamid Jancar',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-12-18 14:19:15'
      },
      {
        rga: '9004.9124.567-2',
        name: 'Aurore Rambadt',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-12-31 16:20:44'
      },
      {
        rga: '9808.8114.805-3',
        name: 'Michelina Moiser',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2020-01-14 20:40:23'
      },
      {
        rga: '1751.6587.521-0',
        name: 'Tandy Woodfield',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-07-01 04:24:25'
      },
      {
        rga: '8744.9056.019-1',
        name: 'Doe Liddel',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-10-11 23:10:52'
      },
      {
        rga: '9853.6901.104-9',
        name: 'Sayre Jelleman',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-09-28 19:24:34'
      },
      {
        rga: '4817.5317.580-8',
        name: 'Araldo Sabbatier',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2020-01-28 17:19:44'
      },
      {
        rga: '1563.3936.873-9',
        name: 'Aurelia Jerosch',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-03-26 18:04:29'
      },
      {
        rga: '8975.2718.684-8',
        name: 'Kizzie Pye',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-09-09 14:34:23'
      },
      {
        rga: '6345.6695.704-0',
        name: 'Cesya Condict',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-04-21 09:24:57'
      },
      {
        rga: '8410.2183.552-1',
        name: 'Frasco Furmedge',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-05-15 11:35:18'
      },
      {
        rga: '9343.6447.550-8',
        name: 'Zedekiah Shuxsmith',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-07-18 15:56:48'
      },
      {
        rga: '0796.5238.282-3',
        name: 'Mignon Greep',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-11-07 22:56:52'
      },
      {
        rga: '6014.4613.845-3',
        name: 'Mickey Mollatt',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-03-27 19:33:59'
      },
      {
        rga: '3179.5868.060-5',
        name: 'Dorene Sanbrook',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-09-07 18:01:42'
      },
      {
        rga: '4729.2073.029-1',
        name: 'Antoine Bunce',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-10-15 11:47:12'
      },
      {
        rga: '0405.7367.862-3',
        name: 'Flossi Devenish',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-06-04 20:30:25'
      },
      {
        rga: '0208.3551.767-8',
        name: 'Lothaire Bartosch',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-11-04 11:39:02'
      },
      {
        rga: '6930.5619.477-1',
        name: 'Abbie Scutching',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-05-10 07:25:58'
      },
      {
        rga: '6182.4123.548-2',
        name: 'Hercule Boagey',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-06-29 06:25:01'
      },
      {
        rga: '6429.9630.200-9',
        name: 'Perry Startin',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-08-06 04:03:06'
      },
      {
        rga: '9656.2290.945-9',
        name: 'Myrtle Adcock',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-08-05 10:11:16'
      },
      {
        rga: '8794.6657.463-7',
        name: 'Brigida Belamy',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-05-22 03:05:40'
      },
      {
        rga: '2748.7340.315-5',
        name: 'Cinderella Wensley',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-07-15 07:41:46'
      },
      {
        rga: '1124.1734.078-7',
        name: 'Leonardo Rowles',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-12-07 03:04:01'
      },
      {
        rga: '0482.0134.263-1',
        name: 'Brose McClounan',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-07-05 18:11:36'
      },
      {
        rga: '1416.5976.801-9',
        name: 'Boigie Heinle',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-04-22 13:28:27'
      },
      {
        rga: '2071.4116.158-2',
        name: 'Kalie Leathes',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-06-01 18:47:24'
      },
      {
        rga: '9696.7644.035-4',
        name: 'Jerrilyn Sterzaker',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-04-21 04:21:10'
      },
      {
        rga: '4466.0265.917-4',
        name: 'Corinne Humphery',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-08-23 20:04:55'
      },
      {
        rga: '5897.9049.116-6',
        name: 'Madelaine Colquite',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-05-24 01:19:46'
      },
      {
        rga: '8570.8718.672-0',
        name: 'Kevina Lozano',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-08-30 17:01:32'
      },
      {
        rga: '4449.7125.079-4',
        name: 'Nadiya Maulin',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-09-18 13:34:32'
      },
      {
        rga: '6108.9191.554-4',
        name: 'Jared Andell',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2020-01-24 05:51:59'
      },
      {
        rga: '8434.7484.732-7',
        name: 'Willie Haveline',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-08-26 09:27:30'
      },
      {
        rga: '9579.6002.493-3',
        name: 'Ameline Churchin',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-11-12 21:20:52'
      },
      {
        rga: '3380.6619.629-3',
        name: 'Bentlee Hellewell',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-10-13 08:09:45'
      },
      {
        rga: '7524.2145.944-7',
        name: 'Chaddie Hows',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2020-01-19 23:21:47'
      },
      {
        rga: '3482.5855.724-0',
        name: 'Ethan Milbourne',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-09-07 10:02:36'
      },
      {
        rga: '6455.5914.733-6',
        name: 'Rubie Rushworth',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-06-10 11:24:26'
      },
      {
        rga: '8443.0723.267-8',
        name: 'Amalita Woolston',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-04-24 23:03:04'
      },
      {
        rga: '3518.1450.348-8',
        name: 'Herc Cuffin',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-08-24 06:23:43'
      },
      {
        rga: '8301.1279.390-4',
        name: 'Paolina Charrisson',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2020-01-26 17:24:13'
      },
      {
        rga: '9496.4975.982-1',
        name: 'Aaren Gromley',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2020-01-24 05:46:44'
      },
      {
        rga: '1527.3545.567-2',
        name: 'Pascale Aymer',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-08-03 18:54:54'
      },
      {
        rga: '2891.2170.888-3',
        name: 'Costanza Hamblin',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-09-18 18:06:44'
      },
      {
        rga: '7404.8209.342-7',
        name: 'Osmond Wearne',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-10-27 16:14:02'
      },
      {
        rga: '1419.8779.475-7',
        name: 'Vinnie Ipgrave',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-07-15 19:00:19'
      },
      {
        rga: '3631.4895.622-4',
        name: 'Millie Propper',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-05-19 03:39:48'
      },
      {
        rga: '4741.0470.112-3',
        name: 'Nedda Newlan',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-12-31 10:44:43'
      },
      {
        rga: '5793.5594.618-2',
        name: 'Guillema Scopes',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-12-10 15:24:16'
      },
      {
        rga: '1906.0951.930-6',
        name: 'Carolyne Shelley',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-08-01 18:14:16'
      },
      {
        rga: '3056.1684.946-9',
        name: 'Lexine Rudgerd',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-12-13 17:08:42'
      },
      {
        rga: '4622.7114.705-2',
        name: 'Lorilee Beagin',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-08-18 08:27:04'
      },
      {
        rga: '3756.5710.779-2',
        name: 'Aundrea Hallowes',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-08-02 13:27:21'
      },
      {
        rga: '7096.7593.180-0',
        name: "Pat O''Spellissey",
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-10-06 14:06:35'
      },
      {
        rga: '4156.2380.709-3',
        name: 'Geno Zanneli',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-10-15 04:39:41'
      },
      {
        rga: '0983.7700.760-5',
        name: 'Vassili Kaindl',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-12-04 10:12:33'
      },
      {
        rga: '7678.5608.306-6',
        name: 'Orelia Stoney',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2020-01-11 05:06:47'
      },
      {
        rga: '7476.0049.399-3',
        name: 'Aggy Baudts',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-11-08 18:04:46'
      },
      {
        rga: '5062.7171.974-7',
        name: 'Ernestus Sturgess',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-03-22 09:22:31'
      },
      {
        rga: '3378.0017.438-8',
        name: 'Cordey Mogie',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-04-05 22:04:17'
      },
      {
        rga: '1825.2795.531-2',
        name: 'Karlotte Minker',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-02-26 17:11:02'
      },
      {
        rga: '7964.2120.892-4',
        name: 'Carla Ganley',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2020-01-08 04:33:36'
      },
      {
        rga: '8491.3701.634-1',
        name: 'Leslie Whifen',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-02-26 13:18:55'
      },
      {
        rga: '3876.9030.734-3',
        name: 'Dan Bulbrook',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-11-03 21:18:03'
      },
      {
        rga: '6775.1343.070-0',
        name: 'Marketa Morson',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-10-04 08:20:24'
      },
      {
        rga: '4243.6836.267-6',
        name: 'Rosalinde Pietruszka',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-11-17 23:23:46'
      },
      {
        rga: '7287.6590.721-9',
        name: 'Abey Delaprelle',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-07-28 00:27:32'
      },
      {
        rga: '9841.2997.932-3',
        name: 'Trever McMennum',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-10-04 01:56:02'
      },
      {
        rga: '8471.3526.278-1',
        name: 'Jamima Molden',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-06-23 05:14:35'
      },
      {
        rga: '8224.9695.833-6',
        name: 'Lavinia Boggers',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-07-27 20:58:40'
      },
      {
        rga: '7612.7817.343-3',
        name: 'Salvador Noice',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-03-07 03:13:41'
      },
      {
        rga: '8215.5186.660-1',
        name: 'Elka Filkin',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-11-16 01:42:45'
      },
      {
        rga: '7953.6611.733-7',
        name: 'Ailis Tayspell',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-05-07 01:22:36'
      },
      {
        rga: '2078.9522.969-0',
        name: 'Dollie Fosdike',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-06-05 12:14:26'
      },
      {
        rga: '8798.0566.667-1',
        name: 'Nataline Gurry',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-04-26 23:18:16'
      },
      {
        rga: '7487.5452.292-0',
        name: 'Glynnis Gethouse',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-05-27 02:58:23'
      },
      {
        rga: '2494.7645.720-8',
        name: 'Yule Park',
        course: 'si',
        status: 'inativo',
        registeredIn: '2020-01-15 06:21:41'
      },
      {
        rga: '2561.4857.722-5',
        name: 'Marijo Son',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-11-10 12:23:15'
      },
      {
        rga: '3059.1284.442-6',
        name: 'Clair Slixby',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-04-26 12:39:47'
      },
      {
        rga: '1269.1316.789-2',
        name: 'Lelia Rizzetti',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-07-18 13:09:24'
      },
      {
        rga: '0020.4266.157-2',
        name: 'Herve Lissaman',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-12-14 05:07:29'
      },
      {
        rga: '0847.9154.662-1',
        name: 'Melba Pisculli',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-10-18 18:18:06'
      },
      {
        rga: '1886.4647.386-5',
        name: 'Franny Pawelke',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-10-22 19:19:19'
      },
      {
        rga: '2355.4849.102-5',
        name: 'Dallas Alelsandrowicz',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-02-28 13:25:03'
      },
      {
        rga: '5336.8593.323-6',
        name: 'Cyb Lulham',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2020-01-29 19:19:26'
      },
      {
        rga: '7670.0747.848-6',
        name: 'Allayne Toderbrugge',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-03-31 21:42:03'
      },
      {
        rga: '7721.0121.119-1',
        name: 'Carma Serrurier',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-11-12 08:36:11'
      },
      {
        rga: '0296.3854.725-2',
        name: 'Stillman Dudeney',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-08-16 14:36:37'
      },
      {
        rga: '0672.8553.904-2',
        name: 'Stacy Quickenden',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-12-27 18:42:43'
      },
      {
        rga: '9312.5052.258-6',
        name: 'Edee Fradson',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-10-23 00:28:23'
      },
      {
        rga: '8700.7228.710-6',
        name: 'Richy Aspin',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-05-31 03:09:03'
      },
      {
        rga: '1712.7464.446-4',
        name: 'Martino Merner',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-10-11 08:35:22'
      },
      {
        rga: '9776.2169.955-8',
        name: 'Nicoline Stickels',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-12-23 02:11:06'
      },
      {
        rga: '9449.5800.208-4',
        name: 'Eryn Bricket',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-06-20 22:01:14'
      },
      {
        rga: '4750.0626.610-9',
        name: 'Melisandra Thirlwall',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-07-21 03:06:56'
      },
      {
        rga: '9127.1041.896-0',
        name: 'Aguistin Huxstep',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-11-17 23:47:11'
      },
      {
        rga: '3614.1439.666-5',
        name: 'Aviva Tranter',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-10-03 10:38:48'
      },
      {
        rga: '2192.3131.630-1',
        name: 'Deloria Riddock',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-12-04 01:46:16'
      },
      {
        rga: '9120.9084.121-4',
        name: 'Katharina Peperell',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-05-29 07:25:40'
      },
      {
        rga: '4472.3872.786-9',
        name: 'Ernie Gaudon',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-05-04 20:48:31'
      },
      {
        rga: '7266.1856.820-5',
        name: 'Yasmeen Sharkey',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-12-26 04:14:57'
      },
      {
        rga: '5376.2214.520-8',
        name: 'Hazel McNickle',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-03-27 11:53:50'
      },
      {
        rga: '7515.3351.908-3',
        name: 'Jay Northcott',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-10-07 03:36:23'
      },
      {
        rga: '1137.6857.814-2',
        name: 'Garret Krolik',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-09-26 11:12:36'
      },
      {
        rga: '5427.6290.402-7',
        name: 'Maire Bredbury',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-03-07 12:40:42'
      },
      {
        rga: '0047.8086.524-2',
        name: 'Mae Mallord',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-10-08 16:52:13'
      },
      {
        rga: '0059.7801.164-8',
        name: 'Kenn Downs',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-08-18 01:15:54'
      },
      {
        rga: '0253.6563.664-9',
        name: 'Jason Rispen',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-11-28 07:02:37'
      },
      {
        rga: '1279.4018.257-4',
        name: 'Farr Gullick',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-06-11 23:30:08'
      },
      {
        rga: '3096.0688.779-2',
        name: 'Michel Heady',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-06-02 00:17:42'
      },
      {
        rga: '5212.6458.469-1',
        name: 'Mariejeanne Clunan',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-02-22 15:27:22'
      },
      {
        rga: '6698.2496.898-2',
        name: 'Antoinette Chaperling',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2020-01-14 05:44:30'
      },
      {
        rga: '5928.5676.358-6',
        name: 'Fraze Cornelius',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-11-06 05:08:30'
      },
      {
        rga: '3325.8796.838-7',
        name: 'Burr Ballantine',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-07-24 08:53:26'
      },
      {
        rga: '0624.5665.761-0',
        name: 'Jeannie Bendon',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-12-01 02:00:38'
      },
      {
        rga: '7731.6137.149-4',
        name: 'Harley Plumbley',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-11-25 10:42:14'
      },
      {
        rga: '3543.4896.615-8',
        name: 'Marcille Weildish',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-09-15 18:02:50'
      },
      {
        rga: '4071.0933.211-0',
        name: 'Haskel Balazs',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2020-01-28 12:55:27'
      },
      {
        rga: '7611.2616.736-0',
        name: 'Ricca Banner',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-11-05 01:01:45'
      },
      {
        rga: '8475.6122.186-5',
        name: 'Farleigh Stormont',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-06-12 15:10:21'
      },
      {
        rga: '8930.5244.423-5',
        name: 'Chad Limmer',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-09-14 04:36:17'
      },
      {
        rga: '8079.5975.603-8',
        name: 'Max Sillars',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-07-06 08:05:52'
      },
      {
        rga: '5596.4440.412-4',
        name: 'Max Seman',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-11-23 03:00:56'
      },
      {
        rga: '3754.2290.247-1',
        name: 'Aura Pochin',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-06-29 17:35:05'
      },
      {
        rga: '6779.6914.153-7',
        name: 'Kimmy Carnachen',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-04-25 04:30:44'
      },
      {
        rga: '2126.8900.823-1',
        name: 'Cathi Burrel',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-09-10 07:46:26'
      },
      {
        rga: '4635.8843.702-3',
        name: 'Enrichetta Oldland',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-04-04 14:25:51'
      },
      {
        rga: '5657.2234.039-0',
        name: 'Ofilia Sweet',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-07-06 23:15:07'
      },
      {
        rga: '2429.7674.658-9',
        name: 'Anica Dibdale',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-09-13 02:43:26'
      },
      {
        rga: '4864.4973.041-8',
        name: 'Cindelyn Halloran',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2020-01-03 21:35:58'
      },
      {
        rga: '0433.6876.854-9',
        name: 'Ode Minchella',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-08-01 16:39:58'
      },
      {
        rga: '2774.5568.588-1',
        name: 'Sallyanne Crasswell',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-12-10 10:19:54'
      },
      {
        rga: '5884.3705.343-9',
        name: 'Leonerd Dod',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-07-24 09:27:50'
      },
      {
        rga: '2380.7769.088-4',
        name: 'Arlen Worton',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-10-24 00:16:04'
      },
      {
        rga: '9616.8953.150-1',
        name: 'Zarla Hallstone',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-08-14 02:52:12'
      },
      {
        rga: '9888.4720.845-9',
        name: 'Farly De La Salle',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-08-20 07:21:50'
      },
      {
        rga: '3641.0399.861-7',
        name: 'Willdon Sarjent',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-12-11 05:34:33'
      },
      {
        rga: '7870.9899.939-1',
        name: 'Dodie MacPhee',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-06-15 14:28:00'
      },
      {
        rga: '4269.9079.886-9',
        name: 'Ezechiel Feron',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-10-29 16:30:02'
      },
      {
        rga: '5079.7302.528-4',
        name: 'Melisse Gilffilland',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-05-18 07:38:33'
      },
      {
        rga: '8470.0875.174-5',
        name: 'Kirstin Creedland',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-11-03 05:21:48'
      },
      {
        rga: '6241.8119.703-7',
        name: 'Jarid Folley',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2020-01-24 20:49:38'
      },
      {
        rga: '3826.0508.184-5',
        name: 'Elvyn Dell',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-04-22 05:20:15'
      },
      {
        rga: '8457.3324.542-0',
        name: 'Nonnah Frontczak',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-05-20 21:15:42'
      },
      {
        rga: '8986.0479.621-1',
        name: 'Bev Lawie',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-11-29 17:28:47'
      },
      {
        rga: '3971.6710.163-5',
        name: 'Darcey Vlasin',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-09-20 02:46:49'
      },
      {
        rga: '7625.1648.260-9',
        name: 'Sancho Carder',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-05-11 01:24:12'
      },
      {
        rga: '1959.1422.859-4',
        name: 'Fairlie Murricanes',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-11-25 20:16:20'
      },
      {
        rga: '0438.2967.770-0',
        name: 'Alvy Nan Carrow',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-04-03 18:41:44'
      },
      {
        rga: '2695.9847.142-6',
        name: 'Evaleen Esseby',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2020-01-02 10:48:16'
      },
      {
        rga: '7396.6176.238-6',
        name: 'Alvinia Bescoby',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-07-26 19:45:37'
      },
      {
        rga: '4955.6817.931-2',
        name: 'Jocelyne Catterell',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-08-11 23:00:08'
      },
      {
        rga: '7999.9459.521-9',
        name: 'Flore Skym',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-09-14 04:34:27'
      },
      {
        rga: '8158.2076.811-7',
        name: 'Audrye Antcliffe',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-07-20 19:37:08'
      },
      {
        rga: '1959.2854.856-4',
        name: 'Kalvin Pesak',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-05-02 13:15:40'
      },
      {
        rga: '5965.6720.597-5',
        name: 'Amalia Lemme',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-06-19 17:02:09'
      },
      {
        rga: '7958.8145.704-8',
        name: 'Bron Slisby',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-11-27 13:58:31'
      },
      {
        rga: '1343.4215.731-9',
        name: 'Terrill Richardot',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-08-15 20:04:38'
      },
      {
        rga: '9360.5200.268-6',
        name: 'Beauregard Yerson',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-07-21 03:24:41'
      },
      {
        rga: '7177.4581.030-3',
        name: 'Karlee Fardo',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-11-25 04:05:25'
      },
      {
        rga: '4917.1145.709-9',
        name: 'Ethan Sowter',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-05-17 18:52:48'
      },
      {
        rga: '3263.1195.923-4',
        name: 'Dorita Frontczak',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-02-18 23:11:20'
      },
      {
        rga: '7122.6059.728-2',
        name: 'Mata Palfreeman',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-09-11 23:33:20'
      },
      {
        rga: '3534.0159.889-5',
        name: 'Oren Shearsby',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-02-28 19:56:07'
      },
      {
        rga: '6526.1944.341-7',
        name: 'Lorne Glowacha',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-09-14 13:24:02'
      },
      {
        rga: '6845.6946.325-1',
        name: 'Bee Breese',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-10-04 07:35:19'
      },
      {
        rga: '0885.4639.757-8',
        name: 'Ulrika Dysart',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-07-22 00:50:22'
      },
      {
        rga: '0887.9511.587-1',
        name: 'Dermot Decayette',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-11-18 20:52:58'
      },
      {
        rga: '4811.4563.850-3',
        name: 'Loralyn Harry',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-12-06 05:15:01'
      },
      {
        rga: '2879.9159.295-7',
        name: 'Theresa Phinnessy',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-12-26 01:27:40'
      },
      {
        rga: '7851.2319.173-1',
        name: 'Madelon Moore',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-05-10 19:10:17'
      },
      {
        rga: '4594.3010.959-4',
        name: 'Lauritz Gieves',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2020-01-10 21:29:29'
      },
      {
        rga: '1869.9328.324-6',
        name: 'Rona Lepoidevin',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-05-08 00:19:15'
      },
      {
        rga: '6281.9091.009-7',
        name: 'Nicholas Ashford',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-09-15 16:40:05'
      },
      {
        rga: '0254.2321.333-9',
        name: 'Celestyna McErlaine',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-05-03 04:08:14'
      },
      {
        rga: '6405.4618.133-7',
        name: 'Minda Alten',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-11-28 17:53:19'
      },
      {
        rga: '2668.9513.153-6',
        name: 'Irma Sharvell',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-09-06 17:00:46'
      },
      {
        rga: '5443.8355.477-6',
        name: 'Peder Fishley',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-06-23 06:46:54'
      },
      {
        rga: '8200.0487.222-4',
        name: 'Lewiss Fandrey',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-09-26 16:46:07'
      },
      {
        rga: '1502.7724.378-8',
        name: 'Obie Kulic',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-07-28 22:47:43'
      },
      {
        rga: '0882.1165.650-0',
        name: 'Hamil Scamerden',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-09-30 22:34:25'
      },
      {
        rga: '3994.0452.268-1',
        name: 'Gary Collinson',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-10-24 06:24:54'
      },
      {
        rga: '3301.3092.232-2',
        name: 'Elonore Howsley',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-02-24 03:25:18'
      },
      {
        rga: '1713.8181.077-2',
        name: 'Emmalynn Schneidau',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-08-01 09:42:03'
      },
      {
        rga: '3698.8750.757-7',
        name: 'Veda Mallinder',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-08-13 10:08:44'
      },
      {
        rga: '3016.1641.206-8',
        name: 'Bernelle Checo',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-12-29 00:26:07'
      },
      {
        rga: '8789.8934.769-0',
        name: 'Elinore Budibent',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-04-06 03:19:48'
      },
      {
        rga: '6320.5346.067-8',
        name: 'Robbyn Rozsa',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-11-30 01:00:48'
      },
      {
        rga: '4284.4440.607-6',
        name: 'Karilynn Elsie',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-06-17 13:05:00'
      },
      {
        rga: '2189.3354.314-7',
        name: 'Nanine Yerson',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-08-29 18:01:50'
      },
      {
        rga: '7914.4282.484-1',
        name: 'Torrie Duffy',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-09-02 06:53:38'
      },
      {
        rga: '7933.0370.736-2',
        name: 'Erminie Ocklin',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-12-28 16:16:53'
      },
      {
        rga: '9069.8277.552-7',
        name: 'Cassi Freegard',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-10-25 06:13:49'
      },
      {
        rga: '5427.2755.805-5',
        name: 'Jaquelin Bamber',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-07-16 11:19:00'
      },
      {
        rga: '9660.0857.484-3',
        name: 'Mandi Dabrowski',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-04-14 17:24:11'
      },
      {
        rga: '3362.4962.897-1',
        name: 'Missy Dibbert',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-02-27 19:27:26'
      },
      {
        rga: '2675.5084.398-1',
        name: 'Ryley Vallow',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2020-01-30 01:44:04'
      },
      {
        rga: '4999.4543.221-3',
        name: 'Patsy Kinnin',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-12-08 13:19:13'
      },
      {
        rga: '6103.3515.781-3',
        name: 'Cairistiona Headan',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-08-10 16:17:21'
      },
      {
        rga: '0325.4910.365-8',
        name: 'Kelley Gaskamp',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-05-27 16:07:15'
      },
      {
        rga: '1943.7929.522-8',
        name: 'Delphine Sealey',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-07-08 10:42:48'
      },
      {
        rga: '5367.4229.364-7',
        name: 'Wesley Enoksson',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-06-09 12:06:07'
      },
      {
        rga: '0785.9180.704-4',
        name: 'Blondy Manass',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-04-09 05:17:08'
      },
      {
        rga: '0942.6648.899-6',
        name: 'Maisie Pingstone',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-08-18 01:20:42'
      },
      {
        rga: '0206.9524.756-9',
        name: 'Joellyn Donoghue',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-06-04 03:47:20'
      },
      {
        rga: '4249.2802.826-8',
        name: 'Andras Nestor',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-11-19 15:29:02'
      },
      {
        rga: '7617.9011.448-0',
        name: 'Ferrel Ierland',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2020-01-07 17:36:52'
      },
      {
        rga: '0015.2729.974-7',
        name: 'Tana Yeulet',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-09-24 05:08:59'
      },
      {
        rga: '7347.1455.085-9',
        name: 'Venus Galego',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-04-06 00:04:33'
      },
      {
        rga: '6040.1197.469-3',
        name: 'Manda Beernt',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-09-26 00:10:06'
      },
      {
        rga: '0778.5408.534-2',
        name: 'Anna-diana Shorto',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-03-12 16:38:16'
      },
      {
        rga: '3493.6712.559-7',
        name: 'Ninnette Cocher',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-09-16 22:59:17'
      },
      {
        rga: '5922.2807.729-0',
        name: 'Mack Orsman',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-10-29 11:28:03'
      },
      {
        rga: '5732.3608.760-6',
        name: 'Camilla Tuson',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2020-01-29 03:02:48'
      },
      {
        rga: '2169.7906.653-0',
        name: 'Cristiano Diben',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2020-01-27 11:04:41'
      },
      {
        rga: '4548.3623.822-2',
        name: 'Cordell Daviddi',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-10-11 18:57:39'
      },
      {
        rga: '0022.2753.945-8',
        name: 'Ned Medler',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-05-12 04:58:56'
      },
      {
        rga: '6554.5997.115-8',
        name: 'Rena Pauel',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2020-01-19 23:35:20'
      },
      {
        rga: '1386.0207.160-9',
        name: 'Amble Mengue',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-11-07 01:21:36'
      },
      {
        rga: '3899.2518.802-2',
        name: 'Sloane Fogel',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-12-30 15:06:50'
      },
      {
        rga: '0091.5152.596-0',
        name: 'Riane Haighton',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-12-21 05:33:23'
      },
      {
        rga: '2552.7372.808-5',
        name: 'Alyce Pople',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-05-14 14:28:06'
      },
      {
        rga: '2227.2855.643-3',
        name: 'Sargent Cuttle',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2020-01-31 08:59:37'
      },
      {
        rga: '3047.4505.857-2',
        name: 'Brier Bulleyn',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-10-20 18:19:41'
      },
      {
        rga: '6677.3311.579-4',
        name: 'Astra Arni',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-06-30 19:53:05'
      },
      {
        rga: '1811.9924.970-5',
        name: 'Shirline Vaney',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-02-26 18:29:31'
      },
      {
        rga: '3564.2171.503-4',
        name: 'Laryssa Davitti',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-05-04 01:49:10'
      },
      {
        rga: '4419.2889.670-0',
        name: 'Daveen Birwhistle',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-11-11 08:35:16'
      },
      {
        rga: '4420.4500.292-1',
        name: 'Nertie Canizares',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-11-23 02:46:27'
      },
      {
        rga: '1958.4405.424-2',
        name: 'Cosimo Hanscombe',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-09-05 06:45:25'
      },
      {
        rga: '8666.7290.320-6',
        name: 'Orin Babber',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-08-24 00:12:42'
      },
      {
        rga: '3041.5411.736-4',
        name: 'Merwin Chedgey',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-03-20 09:53:08'
      },
      {
        rga: '2161.4803.063-0',
        name: 'Sidoney Hambridge',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-06-15 12:47:41'
      },
      {
        rga: '8274.8186.392-4',
        name: 'Jeana Bostick',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-04-12 11:33:42'
      },
      {
        rga: '3868.8175.863-8',
        name: 'Carrie Yann',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-09-18 07:27:33'
      },
      {
        rga: '9928.0932.091-2',
        name: 'Mikaela Glassard',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-11-06 10:05:58'
      },
      {
        rga: '0949.7203.675-5',
        name: 'Lisle Barrass',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-04-01 17:48:59'
      },
      {
        rga: '7642.8951.400-8',
        name: 'Kent Shawley',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-08-20 05:50:08'
      },
      {
        rga: '1309.6071.865-6',
        name: 'Kelcy Valentinuzzi',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-08-14 23:36:38'
      },
      {
        rga: '3435.6454.836-6',
        name: 'Merwin Goulborn',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-05-23 07:05:39'
      },
      {
        rga: '6397.7956.238-9',
        name: 'Tally Wyllis',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-06-25 20:38:24'
      },
      {
        rga: '2474.7942.266-7',
        name: 'Sidnee Peotz',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-03-21 04:52:13'
      },
      {
        rga: '4015.7727.075-4',
        name: 'Florrie Agirre',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-05-09 20:10:48'
      },
      {
        rga: '0075.6187.663-2',
        name: 'Vicky Marlen',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-10-21 15:22:44'
      },
      {
        rga: '3939.6714.077-3',
        name: 'Franky Drache',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-05-26 02:52:06'
      },
      {
        rga: '6376.0881.250-5',
        name: 'Viviana Bazelle',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-03-17 18:05:17'
      },
      {
        rga: '2844.9925.941-6',
        name: 'Drusi Hentzer',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-10-30 13:00:07'
      },
      {
        rga: '3332.2481.002-9',
        name: 'Culley Goshawk',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-07-30 19:41:16'
      },
      {
        rga: '6394.5896.972-8',
        name: 'Ikey Harrisson',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-12-29 09:00:51'
      },
      {
        rga: '9398.5881.942-2',
        name: 'Harwell Whopples',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-07-17 08:56:27'
      },
      {
        rga: '5959.0365.656-2',
        name: 'Muffin Haddrill',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-12-27 19:43:23'
      },
      {
        rga: '6558.9281.577-4',
        name: 'Efren Shinton',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-02-24 07:43:18'
      },
      {
        rga: '3020.9999.643-5',
        name: 'Lilas Haire',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-08-27 04:03:07'
      },
      {
        rga: '8881.6272.799-9',
        name: 'Kirby Zambon',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-03-14 00:12:53'
      },
      {
        rga: '6581.4496.003-1',
        name: 'Israel Ioselevich',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-12-24 04:52:53'
      },
      {
        rga: '3669.3086.410-4',
        name: 'Kessiah Brunt',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2020-01-17 00:20:07'
      },
      {
        rga: '8869.4090.009-7',
        name: 'Izzy Houndsom',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-04-17 18:22:21'
      },
      {
        rga: '9431.0756.063-7',
        name: 'Zola Kloss',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-12-12 21:28:16'
      },
      {
        rga: '2777.4770.521-0',
        name: 'Andrew Kenneford',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-08-26 19:24:13'
      },
      {
        rga: '3698.5839.842-6',
        name: 'Kimberli Birtley',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-11-20 00:30:39'
      },
      {
        rga: '8625.5503.157-1',
        name: 'Ellen Rodden',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-12-12 06:31:51'
      },
      {
        rga: '5694.1737.111-2',
        name: 'Hewitt Sorrie',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-09-07 13:03:54'
      },
      {
        rga: '6293.0107.734-7',
        name: 'Spike Rouff',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-03-03 20:43:05'
      },
      {
        rga: '7526.3394.611-8',
        name: 'Selle Cambling',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-04-20 02:11:28'
      },
      {
        rga: '4026.4779.705-4',
        name: 'Janie Baignard',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-12-27 05:03:16'
      },
      {
        rga: '4470.0117.394-8',
        name: 'Jermain Legging',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-09-30 22:47:58'
      },
      {
        rga: '0461.9717.767-1',
        name: 'Jaymee Jacmard',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-09-12 17:10:34'
      },
      {
        rga: '5121.8101.765-2',
        name: 'Ernaline Rames',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-06-10 15:00:07'
      },
      {
        rga: '9680.2390.286-6',
        name: "Jolynn O''Duilleain",
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-04-08 17:56:17'
      },
      {
        rga: '3142.0037.023-5',
        name: 'Amata Dutnell',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-10-08 08:00:33'
      },
      {
        rga: '5826.7841.158-9',
        name: 'Clarie Stack',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-12-29 23:34:18'
      },
      {
        rga: '4229.8878.134-9',
        name: 'Evanne Janecek',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-10-21 03:41:41'
      },
      {
        rga: '0930.9367.271-5',
        name: 'Waylon Lough',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-07-01 08:13:24'
      },
      {
        rga: '7950.0555.666-4',
        name: 'Sascha Saph',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-05-03 03:46:17'
      },
      {
        rga: '8194.7077.203-7',
        name: 'Dillie Janes',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-10-04 04:38:52'
      },
      {
        rga: '3681.7020.705-5',
        name: 'Clovis Puncher',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-03-12 08:08:31'
      },
      {
        rga: '9916.7409.480-5',
        name: 'Yancey Kille',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2020-01-15 15:25:09'
      },
      {
        rga: '1182.1465.545-6',
        name: 'Zsa zsa Jennions',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-10-28 14:50:53'
      },
      {
        rga: '8650.0504.382-2',
        name: 'Cherlyn Du Barry',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2020-01-26 23:06:03'
      },
      {
        rga: '8772.5864.349-0',
        name: 'Nahum Nye',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-06-20 01:07:44'
      },
      {
        rga: '4026.0640.818-1',
        name: 'Pacorro Trevaskis',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-12-20 14:34:45'
      },
      {
        rga: '9754.0058.851-3',
        name: 'Helene Vaud',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-02-28 06:15:04'
      },
      {
        rga: '8738.2887.997-7',
        name: 'Sheilakathryn Ridler',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-12-15 00:24:52'
      },
      {
        rga: '3641.7145.191-8',
        name: 'Humbert Gwyer',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-05-27 17:02:15'
      },
      {
        rga: '7840.0625.278-8',
        name: 'Whitman Bax',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-07-11 08:08:23'
      },
      {
        rga: '8002.5459.677-8',
        name: 'Caesar Renvoise',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-04-09 02:38:45'
      },
      {
        rga: '7819.5077.709-7',
        name: 'Isac Baitman',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-07-16 04:20:21'
      },
      {
        rga: '8021.5435.084-9',
        name: 'Lynette Demelt',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-08-08 11:05:45'
      },
      {
        rga: '9561.0164.032-0',
        name: 'Goldia Sabathe',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-10-23 13:29:09'
      },
      {
        rga: '7967.3431.749-3',
        name: 'Tisha Thatcham',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-10-17 06:40:34'
      },
      {
        rga: '1158.3539.443-3',
        name: 'Barry MacKeogh',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-06-03 22:35:37'
      },
      {
        rga: '8869.4983.040-8',
        name: 'Harrietta Moon',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-04-15 09:08:08'
      },
      {
        rga: '4549.6794.915-3',
        name: 'Burt Blackader',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-08-27 12:57:30'
      },
      {
        rga: '9290.8691.549-2',
        name: 'Milly Carbry',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-10-28 11:54:29'
      },
      {
        rga: '6270.3168.494-6',
        name: 'Jerrold Persicke',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-11-29 16:48:59'
      },
      {
        rga: '3383.3044.678-7',
        name: 'Anatola Branton',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-10-15 00:35:12'
      },
      {
        rga: '5107.8798.083-8',
        name: 'Kaylyn Topper',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-08-18 01:53:40'
      },
      {
        rga: '6868.3272.336-0',
        name: 'Micheal Audus',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-10-15 06:20:40'
      },
      {
        rga: '2992.7480.171-0',
        name: 'Marj Borit',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-12-16 18:23:39'
      },
      {
        rga: '6469.3671.371-9',
        name: 'Karon Monteaux',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-07-10 05:40:43'
      },
      {
        rga: '1315.1422.309-6',
        name: 'Karole MacKibbon',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-09-14 22:37:46'
      },
      {
        rga: '0601.8574.599-5',
        name: 'Matelda Husband',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-05-30 08:03:26'
      },
      {
        rga: '2856.9664.522-5',
        name: 'Vilma McPartling',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-02-27 10:54:02'
      },
      {
        rga: '3050.8601.920-0',
        name: 'Billi Bramwell',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-07-05 20:45:23'
      },
      {
        rga: '9310.5794.492-5',
        name: "Derril O''Keaveny",
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-04-06 16:12:56'
      },
      {
        rga: '6581.9268.371-4',
        name: 'Delly Grebner',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-11-03 17:04:43'
      },
      {
        rga: '3853.2543.865-8',
        name: 'Fawnia Canellas',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-10-20 14:00:50'
      },
      {
        rga: '2742.0307.929-9',
        name: 'Prince Oldershaw',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-08-20 01:48:04'
      },
      {
        rga: '3755.9260.696-3',
        name: 'Devlen Brenston',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-09-17 14:41:26'
      },
      {
        rga: '8777.9627.875-2',
        name: 'Cari Eastbury',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-09-29 22:37:50'
      },
      {
        rga: '0511.0222.509-0',
        name: 'Oates Haward',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-04-24 18:34:10'
      },
      {
        rga: '3560.7835.594-4',
        name: 'Lizabeth Holah',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-06-26 03:03:02'
      },
      {
        rga: '0292.4827.422-2',
        name: 'Ulric Abdon',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-12-02 11:04:03'
      },
      {
        rga: '5269.1614.671-1',
        name: 'Damian Goulbourne',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-05-09 13:15:28'
      },
      {
        rga: '0503.5424.066-1',
        name: 'Ediva Shakle',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-04-27 23:12:11'
      },
      {
        rga: '7139.0854.157-3',
        name: 'Shawnee Boichat',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-05-21 20:18:08'
      },
      {
        rga: '8112.8509.537-8',
        name: 'Ring Kytter',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-08-04 14:53:11'
      },
      {
        rga: '7526.8694.656-3',
        name: 'Delcine Ainley',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-04-03 07:11:32'
      },
      {
        rga: '6200.2565.920-7',
        name: 'Esta Moloney',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-05-04 11:49:42'
      },
      {
        rga: '9485.3721.736-4',
        name: 'Errick Staddart',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-09-08 20:28:14'
      },
      {
        rga: '8398.3748.667-1',
        name: 'Falkner Bending',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-03-17 22:09:49'
      },
      {
        rga: '8189.3396.416-6',
        name: 'Francyne Braisher',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-03-18 08:29:05'
      },
      {
        rga: '4397.4264.136-2',
        name: 'Britni Graser',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-05-17 23:30:34'
      },
      {
        rga: '7905.7352.816-7',
        name: 'Courtnay Sparkwill',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-12-08 14:37:18'
      },
      {
        rga: '8046.4457.531-0',
        name: 'Tyler Ginner',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-05-28 20:16:26'
      },
      {
        rga: '6975.9446.514-7',
        name: 'Adelina Moorrud',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-10-06 15:14:39'
      },
      {
        rga: '0591.3210.320-2',
        name: 'Junia Meiklejohn',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-05-07 10:13:45'
      },
      {
        rga: '0774.1651.863-0',
        name: 'Beverlee Gheorghie',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-09-30 08:08:42'
      },
      {
        rga: '8356.2383.175-9',
        name: 'Wolfy Pindred',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-12-28 18:39:05'
      },
      {
        rga: '0100.2673.834-5',
        name: 'Siffre Facey',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2020-01-29 06:28:42'
      },
      {
        rga: '4422.3411.238-1',
        name: 'Tara Schust',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-12-14 16:42:41'
      },
      {
        rga: '0732.7382.899-2',
        name: 'Claudine Walbridge',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-09-29 13:58:25'
      },
      {
        rga: '6004.0551.788-3',
        name: 'Paten Mullane',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-07-28 23:26:10'
      },
      {
        rga: '4870.6981.504-5',
        name: 'Suellen Scuse',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-12-17 05:29:08'
      },
      {
        rga: '7509.9702.464-6',
        name: 'Nady Makeswell',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-11-21 09:56:16'
      },
      {
        rga: '8029.1726.401-1',
        name: 'Yorke Turrell',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-12-08 09:56:44'
      },
      {
        rga: '0302.7672.960-0',
        name: 'Audre Lindholm',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-04-22 01:44:41'
      },
      {
        rga: '3089.7254.839-0',
        name: 'Seamus Emney',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-08-17 03:16:09'
      },
      {
        rga: '9103.2770.635-2',
        name: 'Drake Hollingsbee',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-07-17 06:31:17'
      },
      {
        rga: '8027.6364.884-1',
        name: 'Bette-ann Lidstone',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-07-06 19:16:06'
      },
      {
        rga: '5572.2670.029-2',
        name: 'Latrina Norval',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-05-29 23:37:01'
      },
      {
        rga: '0541.2498.692-0',
        name: 'Thorndike Davana',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-11-25 02:22:39'
      },
      {
        rga: '6003.5841.170-5',
        name: 'Edin Weatherhill',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-09-12 10:23:52'
      },
      {
        rga: '1242.3756.867-7',
        name: 'Barbette Purdon',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-08-23 13:06:14'
      },
      {
        rga: '5754.8169.835-5',
        name: 'Freddy De Filippo',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-11-04 19:33:21'
      },
      {
        rga: '3294.7116.163-9',
        name: 'Karon Gammidge',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-07-06 12:21:04'
      },
      {
        rga: '7796.8996.330-4',
        name: 'Karolina Fosten',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-12-12 20:15:41'
      },
      {
        rga: '4506.1284.233-0',
        name: 'Pattie Tramel',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-10-21 01:48:08'
      },
      {
        rga: '4971.4554.540-2',
        name: 'Lise Grendon',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-08-26 04:21:10'
      },
      {
        rga: '6004.4053.543-2',
        name: 'Humfrid Bowlands',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-09-14 20:29:23'
      },
      {
        rga: '8897.7794.673-3',
        name: 'Dorothy Gain',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-05-14 20:10:10'
      },
      {
        rga: '3924.4402.797-0',
        name: 'Allayne Mattacks',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-10-21 20:32:55'
      },
      {
        rga: '7612.2004.337-9',
        name: 'Lezley Galvan',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2020-01-09 13:13:39'
      },
      {
        rga: '3224.6098.873-4',
        name: 'Sibbie Allot',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-08-10 20:18:01'
      },
      {
        rga: '2972.7562.160-6',
        name: 'Conn Kellough',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-10-24 08:39:19'
      },
      {
        rga: '3344.3269.278-2',
        name: 'Katuscha Kaas',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-07-15 23:33:26'
      },
      {
        rga: '4040.2843.874-4',
        name: 'Aidan Ghidetti',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-11-12 15:34:14'
      },
      {
        rga: '3791.7215.874-2',
        name: 'Richart MacIlriach',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-09-17 06:10:42'
      },
      {
        rga: '5543.4211.469-8',
        name: 'Man MacNamara',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-05-07 18:02:48'
      },
      {
        rga: '7939.5372.406-3',
        name: 'Bobby Aukland',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-06-09 00:25:37'
      },
      {
        rga: '2933.7942.647-0',
        name: 'Vinny Pepineaux',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-09-10 07:05:39'
      },
      {
        rga: '5922.1156.963-3',
        name: 'Jen Edney',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-12-13 08:28:27'
      },
      {
        rga: '1058.8151.264-0',
        name: 'Zachery Busen',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-03-02 01:09:08'
      },
      {
        rga: '0837.4101.991-0',
        name: 'Edin Corstan',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-08-03 14:49:20'
      },
      {
        rga: '6884.8049.314-7',
        name: 'Hyacinthe Uren',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-04-14 18:55:53'
      },
      {
        rga: '4444.9783.925-6',
        name: 'Guendolen Jodlowski',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-11-29 21:25:31'
      },
      {
        rga: '4642.6711.592-1',
        name: 'Wallas Carty',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2020-01-03 07:28:03'
      },
      {
        rga: '5711.8339.147-7',
        name: 'Charleen Macallam',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-05-03 20:24:23'
      },
      {
        rga: '7225.8480.288-7',
        name: 'Gayelord Soldan',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-03-05 09:10:21'
      },
      {
        rga: '1720.5496.580-6',
        name: 'Bengt Gregson',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-12-24 06:36:47'
      },
      {
        rga: '5831.9555.727-5',
        name: 'Delinda Manoch',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-05-01 17:27:21'
      },
      {
        rga: '8167.9465.108-0',
        name: 'Winonah Tod',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-06-28 21:25:28'
      },
      {
        rga: '6408.4787.812-9',
        name: 'Haily Findon',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-12-30 09:06:22'
      },
      {
        rga: '0978.0235.134-2',
        name: 'Leanor Ratie',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-11-08 00:29:11'
      },
      {
        rga: '0020.1381.308-6',
        name: 'Jasmina Maggi',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-05-13 07:35:57'
      },
      {
        rga: '2717.9882.746-1',
        name: 'Yorgos Edwardson',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-09-26 18:02:27'
      },
      {
        rga: '2343.2020.151-0',
        name: 'Emmanuel Morey',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-07-02 09:03:55'
      },
      {
        rga: '1924.1233.162-9',
        name: 'Marla Bing',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-11-01 13:37:02'
      },
      {
        rga: '1220.3352.568-4',
        name: 'Jodie Barfford',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-03-13 06:30:29'
      },
      {
        rga: '9358.4068.920-4',
        name: 'Roxanna Ritch',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-12-21 10:52:16'
      },
      {
        rga: '6621.8561.592-2',
        name: 'Dari Casotti',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-10-27 11:08:26'
      },
      {
        rga: '0077.6706.079-3',
        name: 'Evita Heck',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-05-17 22:53:42'
      },
      {
        rga: '8636.9984.904-9',
        name: 'Cesaro Moffat',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-08-30 17:33:21'
      },
      {
        rga: '4347.8887.530-6',
        name: 'Raff Vellender',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-11-08 20:55:53'
      },
      {
        rga: '7435.3857.457-1',
        name: 'Arthur Bartot',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-08-16 04:23:26'
      },
      {
        rga: '9333.3545.429-2',
        name: 'Stacy Hawlgarth',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-11-06 18:16:01'
      },
      {
        rga: '7682.9149.957-7',
        name: 'Liana Jerrome',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-06-28 08:38:40'
      },
      {
        rga: '1256.3873.011-6',
        name: 'Terese De Benedetti',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-09-10 21:21:07'
      },
      {
        rga: '8998.4604.144-6',
        name: 'Gay Kembrey',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-07-04 05:46:45'
      },
      {
        rga: '0792.8525.859-6',
        name: 'Benedict Dunlap',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-10-03 13:38:33'
      },
      {
        rga: '5962.9071.726-1',
        name: 'Berri Agdahl',
        course: 'si',
        status: 'ativo',
        registeredIn: '2020-01-03 17:40:01'
      },
      {
        rga: '4194.0764.099-0',
        name: 'Joanna Cruddace',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-10-20 03:23:15'
      },
      {
        rga: '3263.7131.384-8',
        name: 'Julia Di Meo',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-04-25 03:10:00'
      },
      {
        rga: '1041.9662.635-4',
        name: 'Mirelle Davidai',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-08-25 12:25:52'
      },
      {
        rga: '8156.7822.755-0',
        name: 'Jo ann Gallager',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-08-16 20:38:43'
      },
      {
        rga: '0294.2765.511-5',
        name: 'Annice Andor',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-12-19 05:46:19'
      },
      {
        rga: '4584.4140.185-4',
        name: 'Latashia Geroldi',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-12-23 18:38:57'
      },
      {
        rga: '9422.3964.536-8',
        name: 'Ara Cahey',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-04-07 19:32:58'
      },
      {
        rga: '3499.4297.727-5',
        name: 'Weider Corhard',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-12-21 21:39:20'
      },
      {
        rga: '4051.9898.681-2',
        name: 'Baxter Pauleau',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-04-17 07:38:43'
      },
      {
        rga: '5690.3961.036-1',
        name: 'Corey Rosettini',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-09-27 22:24:28'
      },
      {
        rga: '9400.5028.300-6',
        name: 'Cleavland Vynarde',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-04-30 22:13:47'
      },
      {
        rga: '0349.2306.265-9',
        name: 'Caryl Maylor',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2020-01-28 08:04:30'
      },
      {
        rga: '5058.4688.628-8',
        name: 'Virgie Rengger',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-03-23 01:44:58'
      },
      {
        rga: '4791.2401.619-8',
        name: 'Belinda Antecki',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-08-17 07:04:27'
      },
      {
        rga: '7735.6501.758-3',
        name: 'Vikky Bowskill',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-09-14 10:16:16'
      },
      {
        rga: '3074.2990.954-9',
        name: 'Natividad Kruschov',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-09-27 15:19:30'
      },
      {
        rga: '3481.4799.159-8',
        name: 'Denney Nutbeem',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-09-04 14:14:01'
      },
      {
        rga: '1070.7450.599-3',
        name: 'Blakelee Scading',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-07-30 11:45:14'
      },
      {
        rga: '9503.9660.907-1',
        name: 'Delmore Allman',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-12-09 18:44:53'
      },
      {
        rga: '5242.0694.192-7',
        name: 'Anneliese Phateplace',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2020-01-04 11:35:45'
      },
      {
        rga: '2039.2605.648-1',
        name: 'Nicoline Chaffey',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-12-28 02:49:57'
      },
      {
        rga: '7096.9044.757-3',
        name: 'Jeremiah Darragon',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-06-01 21:12:36'
      },
      {
        rga: '7646.6145.950-0',
        name: 'Onida Lace',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-05-06 11:53:50'
      },
      {
        rga: '7266.1667.104-8',
        name: 'Abrahan McGunley',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-07-27 21:03:06'
      },
      {
        rga: '9553.4877.086-3',
        name: 'Johnathon Eads',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-08-06 10:09:02'
      },
      {
        rga: '3670.7941.926-6',
        name: 'Olenka England',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-05-27 00:14:48'
      },
      {
        rga: '1327.2663.940-7',
        name: 'Matti Whyman',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2020-01-27 02:05:50'
      },
      {
        rga: '2274.3913.949-6',
        name: 'Brady Lemmen',
        course: 'si',
        status: 'ativo',
        registeredIn: '2020-01-24 11:50:51'
      },
      {
        rga: '0222.9295.408-7',
        name: 'Pamella McCoole',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-10-13 19:29:52'
      },
      {
        rga: '4936.4974.888-2',
        name: 'Maud Tydeman',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-11-18 12:21:21'
      },
      {
        rga: '5328.2652.830-0',
        name: 'Anabel Scorer',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-04-12 03:06:36'
      },
      {
        rga: '5531.5120.787-4',
        name: 'Ellsworth Mapstone',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-05-28 01:05:15'
      },
      {
        rga: '4585.5851.817-0',
        name: 'Fanni Lunn',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-12-30 01:22:13'
      },
      {
        rga: '9663.4207.681-4',
        name: 'Blondell Kleinhandler',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-03-01 16:20:40'
      },
      {
        rga: '5678.5843.616-9',
        name: 'Demetri Penbarthy',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-04-18 10:27:30'
      },
      {
        rga: '4338.6259.864-5',
        name: 'Staci Vickress',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-03-12 13:31:24'
      },
      {
        rga: '9275.4237.461-8',
        name: 'Alfie Grumbridge',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-10-20 16:06:28'
      },
      {
        rga: '0616.7807.326-8',
        name: 'Ram Huckett',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-07-25 17:19:34'
      },
      {
        rga: '8127.9698.644-2',
        name: 'Munmro Bogey',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2020-01-15 05:19:27'
      },
      {
        rga: '1424.2245.984-6',
        name: 'Stepha Megainey',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-03-23 00:53:08'
      },
      {
        rga: '1271.3684.446-4',
        name: 'Wilmette Sellar',
        course: 'si',
        status: 'ativo',
        registeredIn: '2020-01-28 20:44:42'
      },
      {
        rga: '5446.4724.590-7',
        name: 'Garwin Tindle',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-03-30 22:21:49'
      },
      {
        rga: '6951.4524.438-8',
        name: 'Adan Wehnerr',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-12-04 01:20:08'
      },
      {
        rga: '5931.4135.415-5',
        name: 'Danna Glasson',
        course: 'si',
        status: 'inativo',
        registeredIn: '2020-01-19 01:33:59'
      },
      {
        rga: '8672.2814.693-2',
        name: 'Stevana Curror',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-10-16 21:00:43'
      },
      {
        rga: '2696.3935.946-3',
        name: 'Dolly McGannon',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-05-12 08:20:20'
      },
      {
        rga: '7073.8041.261-3',
        name: 'Bronnie Jallin',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2019-05-30 12:54:40'
      },
      {
        rga: '6191.3972.754-7',
        name: 'Garrek Stocks',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-05-03 06:08:18'
      },
      {
        rga: '6938.4127.451-0',
        name: 'Charyl Aymeric',
        course: 'trc',
        status: 'inativo',
        registeredIn: '2019-08-29 17:08:46'
      },
      {
        rga: '2168.2824.872-6',
        name: 'Brigid Pimblotte',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2019-08-21 21:26:44'
      },
      {
        rga: '0192.0891.018-3',
        name: 'Correy Zavittieri',
        course: 'cc',
        status: 'ativo',
        registeredIn: '2020-01-08 18:27:22'
      },
      {
        rga: '9193.8271.097-9',
        name: 'Aridatha Lammerding',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2019-11-19 13:33:03'
      },
      {
        rga: '0868.1514.338-4',
        name: 'Stanley Sisnett',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-05-26 16:25:27'
      },
      {
        rga: '0950.2169.410-8',
        name: 'Alfie Harraway',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-08-02 03:38:04'
      },
      {
        rga: '4026.6257.450-5',
        name: 'Gerianna Furniss',
        course: 'ecomp',
        status: 'ativo',
        registeredIn: '2020-01-06 14:22:43'
      },
      {
        rga: '1814.8654.401-4',
        name: 'Aubrette Mushrow',
        course: 'si',
        status: 'ativo',
        registeredIn: '2019-10-23 04:06:48'
      },
      {
        rga: '5536.5269.792-8',
        name: 'Jennette Surmeyer',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2019-10-31 05:39:22'
      },
      {
        rga: '6551.9491.948-8',
        name: 'Lucias Errichi',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-07-09 15:01:51'
      },
      {
        rga: '9492.2022.221-1',
        name: 'Raviv Flacknoe',
        course: 'si',
        status: 'inativo',
        registeredIn: '2019-10-10 16:04:10'
      },
      {
        rga: '8821.2762.827-7',
        name: 'Brenden Buckingham',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-11-20 12:26:25'
      },
      {
        rga: '4837.9192.807-7',
        name: 'Babara Gooding',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-02-24 19:19:33'
      },
      {
        rga: '8329.4812.124-2',
        name: 'Michelina Palumbo',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-06-29 13:40:32'
      },
      {
        rga: '4734.5680.815-0',
        name: 'Arley Tackes',
        course: 'ecomp',
        status: 'inativo',
        registeredIn: '2019-05-09 19:52:50'
      },
      {
        rga: '3272.8906.627-7',
        name: 'Kipper Swan',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-05-02 22:18:52'
      },
      {
        rga: '9559.7033.770-8',
        name: 'Sylvester Drewery',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2020-01-07 21:35:58'
      },
      {
        rga: '6655.5124.321-3',
        name: 'Zack Antonikov',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-09-20 14:31:05'
      },
      {
        rga: '2155.6035.098-1',
        name: 'Ashley Vedekhin',
        course: 'cc',
        status: 'inativo',
        registeredIn: '2020-01-13 23:18:40'
      },
      {
        rga: '9039.3905.502-6',
        name: 'Jervis Bazoche',
        course: 'tads',
        status: 'inativo',
        registeredIn: '2019-05-31 07:03:08'
      },
      {
        rga: '9685.0213.716-4',
        name: 'Lavinia Kellard',
        course: 'tads',
        status: 'ativo',
        registeredIn: '2019-05-04 10:27:57'
      },
      {
        rga: '4817.7927.084-2',
        name: 'Benetta Daskiewicz',
        course: 'trc',
        status: 'ativo',
        registeredIn: '2020-01-28 16:49:59'
      },
      {
        rga: '1739.7527.670-5',
        name: 'Myrtice Surgison',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-10-24 10:08:39'
      },
      {
        rga: '8843.9767.737-5',
        name: 'Rikki Bothie',
        course: 'engsoft',
        status: 'ativo',
        registeredIn: '2019-07-10 12:32:08'
      },
      {
        rga: '5191.9761.996-2',
        name: 'Malia Anker',
        course: 'engsoft',
        status: 'inativo',
        registeredIn: '2019-03-17 16:58:05'
      }
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(PostgresStudentEntity, {
      id: Not(Equal('f6f3b501-6e39-4365-b3b0-ee43febe4f34'))
    });
  }
}

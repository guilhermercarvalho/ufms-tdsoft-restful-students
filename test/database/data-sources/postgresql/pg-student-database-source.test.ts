import { PGStudentDatabaseSource } from '../../../../src/database/database-sources/postgresql/pg-student-database-source';
import { ISQLDatabaseWrapper } from '../../../../src/database/interfaces/database-sources/sql-database-wrapper';
import { IStudentDatabaseSource } from '../../../../src/database/interfaces/database-sources/student-database-source';
import { IStudentResponseModel } from '../../../../src/domain/models/student';

function getStudents(): IStudentResponseModel[] {
  return [
    {
      id: '9f3c9a2e-0afe-4949-befd-041a6b14951c',
      rga: '2022-2806.086-2',
      nome: 'Pedro Garcia',
      curso: 'si',
      situacao: 'ativo',
      registrado_em: new Date('2022-02-18')
    },
    {
      id: '7a246958-1085-440a-8d44-021710609c89',
      rga: '2022-2806.082-6',
      nome: 'Maria Pereira de Andrade',
      curso: 'si',
      situacao: 'ativo',
      registrado_em: new Date('2022-02-21')
    }
  ];
}

describe('PostgreSQL Database Source', () => {
  let databaseSource: IStudentDatabaseSource;
  let mockDatabase: ISQLDatabaseWrapper;

  beforeAll(async () => {
    mockDatabase = {
      query: jest.fn()
    };
  });

  beforeEach(() => {
    databaseSource = new PGStudentDatabaseSource(mockDatabase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('create', async () => {
    await databaseSource.create({
      rga: '2022-2806.086-2',
      nome: 'Pedro Garcia',
      curso: 'si',
      situacao: 'ativo',
      registrado_em: new Date('2022-02-18')
    });

    expect(mockDatabase.query).toBeCalledWith(
      'INSERT INTO tb_aluno (rga, nome, curso, situacao, registrado_em) VALUES ($1, $2, $3, $4, $5)',
      ['2022-2806.086-2', 'Pedro Garcia', 'si', 'ativo', new Date('2022-02-18')]
    );
  });

  test('update', async () => {
    await databaseSource.updateOne('9f3c9a2e-0afe-4949-befd-041a6b14951c', {
      rga: '2022-2806.086-2',
      nome: 'Pedro Garcia',
      curso: 'si',
      situacao: 'ativo',
      registrado_em: new Date('2022-02-18')
    });

    expect(mockDatabase.query).toBeCalledWith(
      'UPDATE tb_aluno SET nome = $1, curso = $2, situacao = $3 WHERE id = $4',
      ['Pedro Garcia', 'si', 'ativo', '9f3c9a2e-0afe-4949-befd-041a6b14951c']
    );
  });

  test('delete', async () => {
    await databaseSource.deleteOne('885dac4e-ba40-4aef-91a2-3390c9f69931');
    expect(mockDatabase.query).toBeCalledWith('DELETE tb_aluno where id = $1', [
      '885dac4e-ba40-4aef-91a2-3390c9f69931'
    ]);
  });

  test('getAll', async () => {
    jest
      .spyOn(mockDatabase, 'query')
      .mockImplementation(() => Promise.resolve({ rows: getStudents() }));
    const result = await databaseSource.getAll();

    expect(mockDatabase.query).toHaveBeenCalledWith('SELECT * FROM tb_aluno');
    expect(mockDatabase.query).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual([
      {
        id: '9f3c9a2e-0afe-4949-befd-041a6b14951c',
        rga: '2022-2806.086-2',
        nome: 'Pedro Garcia',
        curso: 'si',
        situacao: 'ativo',
        registrado_em: new Date('2022-02-18')
      },
      {
        id: '7a246958-1085-440a-8d44-021710609c89',
        rga: '2022-2806.082-6',
        nome: 'Maria Pereira de Andrade',
        curso: 'si',
        situacao: 'ativo',
        registrado_em: new Date('2022-02-21')
      }
    ]);
  });

  test('getOne', async () => {
    jest
      .spyOn(mockDatabase, 'query')
      .mockImplementation(() => Promise.resolve({ rows: [getStudents()[0]] }));
    const result = await databaseSource.getOne(
      '7a246958-1085-440a-8d44-021710609c89'
    );

    expect(mockDatabase.query).toHaveBeenCalledWith(
      'SELECT * FROM tb_aluno WHERE id = $1 LIMIT 1',
      ['7a246958-1085-440a-8d44-021710609c89']
    );
    expect(mockDatabase.query).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual({
      id: '9f3c9a2e-0afe-4949-befd-041a6b14951c',
      rga: '2022-2806.086-2',
      nome: 'Pedro Garcia',
      curso: 'si',
      situacao: 'ativo',
      registrado_em: new Date('2022-02-18')
    });
  });
});

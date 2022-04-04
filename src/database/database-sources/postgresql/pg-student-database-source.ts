import { IStudentDatabaseSource } from '../../interfaces/database-sources/student-database-source';
import {
  IStudentRequestModel,
  IStudentResponseModel
} from '../../../domain/models/student';
import { ISQLDatabaseWrapper } from '../../interfaces/database-sources/sql-database-wrapper';

const DB_TABLE = 'tb_aluno';

export class PGStudentDatabaseSource implements IStudentDatabaseSource {
  private db: ISQLDatabaseWrapper;

  constructor(db: ISQLDatabaseWrapper) {
    this.db = db;
  }

  async create(student: IStudentRequestModel): Promise<void> {
    await this.db.query(
      `INSERT INTO ${DB_TABLE} (rga, nome, curso, situacao, registrado_em) VALUES ($1, $2, $3, $4, $5)`,
      [
        student.rga,
        student.nome,
        student.curso,
        student.situacao,
        student.registrado_em
      ]
    );
  }

  async updateOne(id: string, data: IStudentRequestModel): Promise<void> {
    await this.db.query(
      `UPDATE ${DB_TABLE} SET nome = $1, curso = $2, situacao = $3 WHERE id = $4`,
      [data.nome, data.curso, data.situacao, id]
    );
  }

  async deleteOne(id: string): Promise<void> {
    await this.db.query(`DELETE ${DB_TABLE} where id = $1`, [id]);
  }

  async getOne(id: string): Promise<IStudentResponseModel | null> {
    const dbResponse = await this.db.query(
      `SELECT * FROM ${DB_TABLE} WHERE id = $1 LIMIT 1`,
      [id]
    );
    const result = dbResponse.rows.map((item: any) => ({
      id: item.id,
      rga: item.rga,
      nome: item.nome,
      curso: item.curso,
      situacao: item.situacao,
      registrado_em: item.registrado_em
    }));

    return result[0];
  }

  async getAll(): Promise<IStudentResponseModel[]> {
    const dbResponse = await this.db.query(`SELECT * FROM ${DB_TABLE}`);
    const result = dbResponse.rows.map((item: any) => ({
      id: item.id,
      rga: item.rga,
      nome: item.nome,
      curso: item.curso,
      situacao: item.situacao,
      registrado_em: item.registrado_em
    }));

    return result;
  }
}

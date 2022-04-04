import { IStudentDatabaseSource } from "../../interfaces/database-sources/student-database-source";
import { IStudentRequestModel, IStudentResponseModel } from "../../../domain/models/student";
import { ISQLDatabaseWrapper } from "../../interfaces/database-sources/sql-database-wrapper";

const DB_TABLE = "tb_students"

export class PGStudentDatabaseSource implements IStudentDatabaseSource {
  private db: ISQLDatabaseWrapper

  constructor(db: ISQLDatabaseWrapper) {
    this.db = db
  }

  async create(student: IStudentRequestModel): Promise<void> {
    await this.db.query(`INSERT INTO ${DB_TABLE} (name) VALUES ($1)`, [student.name])
  }

  async updateOne(id: string, data: IStudentRequestModel): Promise<void> {
    await this.db.query(`UPDATE ${DB_TABLE} SET name = $1 WHERE id = $2`, [data.name, id])
  }

  async deleteOne(id: string): Promise<void> {
    await this.db.query(`DELETE ${DB_TABLE} where id = $1`, [id])
  }

  async getOne(id: string): Promise<IStudentResponseModel | null> {
    const dbResponse = await this.db.query(`SELECT * FROM ${DB_TABLE} WHERE id = $1 LIMIT 1`, [id])
    const result = dbResponse.rows.map(item => ({
      id: item.id,
      name: item.name
    }))

    return result[0]
  }

  async getAll(): Promise<IStudentResponseModel[]> {
    const dbResponse = await this.db.query(`SELECT * FROM ${DB_TABLE}`)
    const result = dbResponse.rows.map(item => ({
      id: item.id,
      name: item.name
    }))

    return result
  }
}
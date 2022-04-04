import "reflect-metadata";
import { StudentRepository } from "./domain/repositories/student-repository";
import StudentRouter from "./routers/students-router";
import server from "./server";
import { CreateStudent } from "./use-cases/student/create-student";
import { GetAllStudents } from "./use-cases/student/get-all-students";
import { Pool } from 'pg'
import { PGStudentDatabaseSource } from "./database/database-sources/postgresql/pg-student-database-source";

async function getPGDatabaseSource() {
  const db = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  })
  return new PGStudentDatabaseSource(db);
}

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

(async () => {
  const databaseSource = getPGDatabaseSource();

  const studentMiddleWare = StudentRouter(
    new GetAllStudents(new StudentRepository(await databaseSource)),
    new CreateStudent(new StudentRepository(await databaseSource)),
  )

  server.use("/student", studentMiddleWare);
  server.listen(port, () => console.log(`Running server on http://${host}:${port}`))
})()
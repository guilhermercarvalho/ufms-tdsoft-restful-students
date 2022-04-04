import express, { Router } from "express";
import { IStudentDatabaseSource } from "../../database/interfaces/database-sources/student-database-source";
import { StudentRepository } from "../../domain/repositories/student-repository";
import { CreateStudent } from "../../use-cases/student/create-student";
import { GetAllStudents } from "../../use-cases/student/get-all-students";
import { GetOneStudent } from "../../use-cases/student/get-one-student";
import StudentRouter from "./students-router";

export default (databaseSource: IStudentDatabaseSource) => {
  const router: Router = express.Router()

  const studentMiddleWare = StudentRouter(
    new GetAllStudents(new StudentRepository(databaseSource)),
    new GetOneStudent(new StudentRepository(databaseSource)),
    new CreateStudent(new StudentRepository(databaseSource)),
  )

  router.use("/alunos", studentMiddleWare);

  return router;
}

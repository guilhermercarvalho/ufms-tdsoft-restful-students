import express, { Request, Response, Router } from "express";
import { ICreateStudentUseCase } from "../domain/interfaces/use-cases/create-student-use-case";
import { IGetAllStudentsUseCase } from "../domain/interfaces/use-cases/get-all-students-use-case";

export default function StudentRouter(
  getAllStudentsUseCase: IGetAllStudentsUseCase,
  createStudentsUseCase: ICreateStudentUseCase,
) {
  const router: Router = express.Router()

  router.get('/', async (req: Request, res: Response) => {
    try {
      const students = await getAllStudentsUseCase.execute()
      res.send(students)
    } catch (err: any) {
      console.log(err.message)
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  router.post('/', async (req: Request, res: Response) => {
    try {
      await createStudentsUseCase.execute(req.body)
      res.statusCode = 201
      res.json({ message: "Created" })
    } catch (err: any) {
      console.error(err.message)
      res.status(500).send({ message: "Error saving data" })
    }
  })

  return router;
}
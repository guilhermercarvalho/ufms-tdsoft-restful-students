import express, { Request, Response, Router } from 'express';
import { ICreateStudentUseCase } from '../../domain/interfaces/use-cases/create-student-use-case';
import { IGetAllStudentsUseCase } from '../../domain/interfaces/use-cases/get-all-students-use-case';
import { IGetOneStudentUseCase } from '../../domain/interfaces/use-cases/get-one-student-use-case';

export default function StudentRouter(
  getAllStudentsUseCase: IGetAllStudentsUseCase,
  getOneStudentUseCase: IGetOneStudentUseCase,
  createStudentsUseCase: ICreateStudentUseCase
) {
  const router: Router = express.Router();

  router.post('/', async (req: Request, res: Response) => {
    try {
      await createStudentsUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: 'Created' });
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send({ message: 'Error saving data' });
    }
  });

  router.get('/', async (req: Request, res: Response) => {
    try {
      const students = await getAllStudentsUseCase.execute();
      res.send(students);
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send({ message: 'Error fetching data' });
    }
  });

  router.get('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const student = await getOneStudentUseCase.execute(id);
      res.send(student);
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send({ message: 'Error fetching data' });
    }
  });

  return router;
}

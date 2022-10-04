import { adaptRoute } from '@/main/adapters';
import {
  makeAddStudentController,
  makeLoadAllOrByNameStudentsPagedController,
  makeLoadStudentController,
  makeRemoveStudentController
} from '@/main/factories';

import { Router } from 'express';

export default (router: Router): void => {
  const studentRouter = Router();
  router.use('/alunos', studentRouter);

  studentRouter.get(
    '/',
    adaptRoute(makeLoadAllOrByNameStudentsPagedController())
  );
  studentRouter.get('/:id', adaptRoute(makeLoadStudentController()));
  studentRouter.post('/', adaptRoute(makeAddStudentController()));
  studentRouter.delete('/:id', adaptRoute(makeRemoveStudentController()));
};

import { adaptRoute } from '@/main/adapters';
import {
  makeAddStudentController,
  makeLoadAllOrByNameStudentsPagedController as makeLoadAllOrNameStudentsController,
  makeLoadStudentController,
  makeMethodNotAllowedController,
  makeRemoveStudentController,
  makeUpdateStudentController
} from '@/main/factories';

import { Router } from 'express';

export default (router: Router): void => {
  const studentRouter = Router();
  router.use('/alunos', studentRouter);

  studentRouter.get('/', adaptRoute(makeLoadAllOrNameStudentsController()));
  studentRouter.get('/:id', adaptRoute(makeLoadStudentController()));
  studentRouter.post('/', adaptRoute(makeAddStudentController()));
  studentRouter.put('/:id', adaptRoute(makeUpdateStudentController()));
  studentRouter.delete('/:id', adaptRoute(makeRemoveStudentController()));

  studentRouter.put('/', adaptRoute(makeMethodNotAllowedController()));
  studentRouter.delete('/', adaptRoute(makeMethodNotAllowedController()));
  studentRouter.post('/:id', adaptRoute(makeMethodNotAllowedController()));
};

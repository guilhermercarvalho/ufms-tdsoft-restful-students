import { adaptRoute } from '@/main/adapters';
import {
  makeAddStudentController,
  makeLoadStudentsController
} from '@/main/factories';

import { Router } from 'express';

export default (router: Router): void => {
  router.use('/alunos', router);

  router.get('/', adaptRoute(makeLoadStudentsController()));
  router.post('/', adaptRoute(makeAddStudentController()));
};

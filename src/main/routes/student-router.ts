import { adaptRoute } from '@/main/adapters';
import {
  makeAddStudentController,
  makeLoadAllOrByNameStudentsPagedController
} from '@/main/factories';

import { Router } from 'express';

export default (router: Router): void => {
  router.use('/alunos', router);

  router.get('/', adaptRoute(makeLoadAllOrByNameStudentsPagedController()));
  router.post('/', adaptRoute(makeAddStudentController()));
};

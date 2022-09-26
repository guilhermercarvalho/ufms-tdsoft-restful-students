import { adaptRoute } from '@/main/adapters';
import {
  makeAddStudentController,
  makeLoadAllOrByNameStudentsPagedController,
  makeRemoveStudentController
} from '@/main/factories';

import { Router } from 'express';

export default (router: Router): void => {
  router.use('/alunos', router);

  router.get('/', adaptRoute(makeLoadAllOrByNameStudentsPagedController()));
  router.post('/', adaptRoute(makeAddStudentController()));
  router.delete('/:id', adaptRoute(makeRemoveStudentController()));
};

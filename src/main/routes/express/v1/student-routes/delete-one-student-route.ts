import { Router } from 'express';
import { Database } from 'infra/contracts';
import { expressAdapter } from 'main/adapters';
import { deleteOneStudentController } from 'main/factories';
import { getRepository } from 'main/routes/get-repository';

export default (router: Router, dataSource: Database): void => {
  const repository = getRepository(dataSource);
  router.delete('/:id', expressAdapter(deleteOneStudentController(repository)));
};

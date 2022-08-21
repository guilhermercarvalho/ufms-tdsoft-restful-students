import { Router } from 'express';
import { Database } from 'infra/contracts/database';
import { expressAdapter } from 'main/adapters';
import { createOneStudentController } from 'main/factories';
import { getRepository } from 'main/routes/get-repository';

export default (router: Router, dataSource: Database): void => {
  const repository = getRepository(dataSource);
  router.post('/', expressAdapter(createOneStudentController(repository)));
};

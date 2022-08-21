import { Router } from 'express';
import { Database } from 'infra/contracts';
import { expressAdapter } from 'main/adapters';
import { getOneStudentController } from 'main/factories';
import { endpointNotAllowedController } from 'main/factories/endpoint-not-allowed';
import { getRepository } from 'main/routes/get-repository';

export default (router: Router, dataSource: Database): void => {
  const repository = getRepository(dataSource);
  router.get('/:id', expressAdapter(getOneStudentController(repository)));
  router.post('/:id', expressAdapter(endpointNotAllowedController()));
};

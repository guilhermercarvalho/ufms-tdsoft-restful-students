import { Router } from 'express';
import { IDatabase } from '../../../infra/contracts/database';
import { adaptRoute } from '../../adapters';
import { getAllStudentsController } from '../../factories';
import { getRepository } from '../get-repository';

export default (router: Router, dataSource: IDatabase): void => {
  const repository = getRepository(dataSource);
  router.get('/alunos', adaptRoute(getAllStudentsController(repository)));
};

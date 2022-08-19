import { Router } from 'express';
import { Database } from 'infra/contracts/database';
import { expressAdapter } from 'main/adapters';
import { endpointNotAllowedController } from 'main/factories/endpoint-not-allowed';

export default (router: Router, _dataSource: Database): void => {
  router.put('/', expressAdapter(endpointNotAllowedController()));
  router.delete('/', expressAdapter(endpointNotAllowedController()));
};

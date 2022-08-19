import { Controller } from 'presentation/contracts';
import { EndpointNotAllowedController } from 'presentation/controllers';

export const endpointNotAllowedController = (): Controller => {
  return new EndpointNotAllowedController();
};

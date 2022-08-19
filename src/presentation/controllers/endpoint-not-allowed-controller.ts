import {
  Controller,
  HttpResponse,
  methodNotAllowed
} from 'presentation/contracts';

export class EndpointNotAllowedController implements Controller {
  async handle(): Promise<HttpResponse> {
    return methodNotAllowed(new Error('Method not allowed'));
  }
}

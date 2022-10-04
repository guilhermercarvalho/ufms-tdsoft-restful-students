import {
  Controller,
  HttpResponse,
  methodNotAllowed,
  serverError
} from '@/presentation/interfaces';

export class MethodNotAllowedController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      return methodNotAllowed();
    } catch (error) {
      return serverError(error);
    }
  }
}

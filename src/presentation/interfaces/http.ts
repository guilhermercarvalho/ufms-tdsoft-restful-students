import {
  MethodNotAllowedError,
  ServerError,
  UnauthorizedError
} from '@/presentation/errors';
import { ServerUnavailable } from '@/presentation/errors/server-unavailable';

export type HttpResponse = {
  statusCode: number;
  body: any;
};

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
});

export const methodNotAllowed = (): HttpResponse => ({
  statusCode: 405,
  body: new MethodNotAllowedError()
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
});

export const serverUnavailable = (error: Error): HttpResponse => ({
  statusCode: 503,
  body: new ServerUnavailable(error.stack)
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
});

import { HttpResponse } from '@/presentation/interfaces';

export interface Controller {
  handle: (request: any) => Promise<HttpResponse>;
}

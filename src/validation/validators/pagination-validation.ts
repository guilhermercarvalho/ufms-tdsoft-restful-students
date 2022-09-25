import {
  InvalidParamTypeError,
  LessThanOrEqualError
} from '@/presentation/errors';
import { Validation } from '@/presentation/interfaces';

export class PaginationValidation implements Validation {
  validate(input: any): Error {
    const pageError = this.defaultValidation('page', input['page']);
    const limitError = this.defaultValidation('limit', input['limit']);

    if (pageError || limitError) return pageError || limitError;
  }

  private defaultValidation(param: string, value: any): Error {
    if (value || typeof value === 'number') {
      if (isNaN(value)) return new InvalidParamTypeError(param, 'number');
      if (Number(value) <= 0) return new LessThanOrEqualError(param, 0);
    }
  }
}

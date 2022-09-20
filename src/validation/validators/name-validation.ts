import {
  InvalidParamError,
  InvalidParamTypeError
} from '@/presentation/errors';
import { Validation } from '@/presentation/interfaces/validation';

import validator from 'validator';

export class NameValidation implements Validation {
  validate(input: any): Error {
    if (typeof input['name'] !== 'string') {
      return new InvalidParamTypeError('name', 'string');
    }

    if (!validator.isAlpha(input['name'].trim().replace(/\s/g, ''), 'pt-BR')) {
      return new InvalidParamError('name');
    }
  }
}

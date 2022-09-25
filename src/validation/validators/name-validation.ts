import {
  InvalidParamError,
  InvalidParamTypeError
} from '@/presentation/errors';
import { Validation } from '@/presentation/interfaces/validation';

import validator from 'validator';

export class NameValidation implements Validation {
  validate(input: any): Error {
    if (!isNaN(input['name'])) {
      return new InvalidParamTypeError('name', 'string');
    }

    const isAlpha = validator.isAlpha(
      input['name'].replace(/\s/g, ''),
      'pt-BR'
    );
    if (!isAlpha) {
      return new InvalidParamError('name');
    }
  }
}

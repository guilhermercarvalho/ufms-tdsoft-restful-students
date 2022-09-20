import { InvalidParamError } from '@/presentation/errors';
import { Validation } from '@/presentation/interfaces/validation';

import validator from 'validator';

export class IdUUIDValidation implements Validation {
  validate(input: any): Error {
    const isUUID = validator.isUUID(input['id'], 4);
    if (!isUUID) {
      return new InvalidParamError('id');
    }
  }
}

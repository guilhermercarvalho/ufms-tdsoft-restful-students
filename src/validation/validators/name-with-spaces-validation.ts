import { InvalidParamError } from '@/presentation/errors';
import { Validation } from '@/presentation/interfaces/validation';

import validator from 'validator';

export class NameWithSpacesValidation implements Validation {
  validate(input: any): Error {
    const hasSpaces = /\s/g.test(input['name']);
    if (!hasSpaces) {
      return new InvalidParamError('name');
    }

    const nameSplitted: string[] = input['name'].split(/\s/g);
    nameSplitted.forEach((name) => {
      const isAlpha = validator.isAlpha(name, 'pt-BR');
      if (!isAlpha) {
        return new InvalidParamError('name');
      }
    });
  }
}

import { InvalidParamError } from '@/presentation/errors';
import { Validation } from '@/presentation/interfaces/validation';

import validator from 'validator';

export class RGAValidation implements Validation {
  validate(input: any): Error {
    const rgaFormated = this.formatRGA(input['rga']);

    const rgaSizeEqualsTwelve = rgaFormated.length === 12;
    const rgaIsNumeric = validator.isNumeric(rgaFormated);

    if (!rgaSizeEqualsTwelve || !rgaIsNumeric) {
      return new InvalidParamError('rga');
    }
  }

  private formatRGA(rga: string): string {
    return rga.replace(/\.|-/g, '');
  }
}

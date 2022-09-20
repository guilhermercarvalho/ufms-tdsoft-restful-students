import { InvalidParamError } from '@/presentation/errors';
import { Validation } from '@/presentation/interfaces/validation';

export class CompareValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly value: string
  ) {}

  validate(input: any): Error {
    if (input[this.fieldName] !== this.value) {
      return new InvalidParamError(this.fieldName);
    }
  }
}

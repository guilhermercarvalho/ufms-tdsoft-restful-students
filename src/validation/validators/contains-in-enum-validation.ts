import { InvalidParamError } from '@/presentation/errors';
import { Validation } from '@/presentation/interfaces/validation';

export class ContainsInEnumValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly enumValues: any
  ) {}

  validate(input: any): Error {
    const values = Object.values(this.enumValues);
    const containsInput = values.includes(input[this.fieldName]);
    if (!containsInput) {
      return new InvalidParamError(this.fieldName);
    }
  }
}

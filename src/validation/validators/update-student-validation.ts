import { MissingParamUpdateError } from '@/presentation/errors/missing-param-update-error';
import { Validation } from '@/presentation/interfaces/validation';

export class UpdateStudentValidation implements Validation {
  validate(input: any): Error {
    const { name, course, status } = input;

    if (!name && !course && !status) return new MissingParamUpdateError();
  }
}

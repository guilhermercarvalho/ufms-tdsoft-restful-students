import { Validation } from '@/presentation/interfaces';
import {
  NameValidation,
  PaginationValidation,
  RequiredFieldValidation,
  ValidationComposite
} from '@/validation/validators';

export const makeLoadStudentsByNamePagedValidation =
  (): ValidationComposite => {
    const validations: Validation[] = [];

    for (const field of ['name']) {
      validations.push(new RequiredFieldValidation(field));
    }

    validations.push(new NameValidation());
    validations.push(new PaginationValidation());

    return new ValidationComposite(validations);
  };

import { Validation } from '@/presentation/interfaces';
import { ValidationComposite } from '@/validation/validators';
import { PaginationValidation } from '@/validation/validators';

export const makeLoadStudentsPagedValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  validations.push(new PaginationValidation());

  return new ValidationComposite(validations);
};

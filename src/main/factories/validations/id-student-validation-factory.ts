import { Validation } from '@/presentation/interfaces';
import {
  RequiredFieldValidation,
  UUIDValidation,
  ValidationComposite
} from '@/validation/validators';

export const makeIdStudentValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  validations.push(new RequiredFieldValidation('id'));
  validations.push(new UUIDValidation());

  return new ValidationComposite(validations);
};

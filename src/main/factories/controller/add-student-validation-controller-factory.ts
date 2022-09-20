import { StudentCourse } from '@/domain/entities';
import { Validation } from '@/presentation/interfaces/validation';
import {
  ContainsInEnumValidation,
  RequiredFieldValidation,
  RGAValidation,
  StatusValidation,
  ValidationComposite
} from '@/validation/validators';
import { NameWithSpacesValidation } from '@/validation/validators';

export const makeAddStudentValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  for (const field of ['name', 'rga', 'course']) {
    validations.push(new RequiredFieldValidation(field));
  }

  validations.push(new NameWithSpacesValidation());
  validations.push(new RGAValidation());
  validations.push(new ContainsInEnumValidation('course', StudentCourse));
  validations.push(new StatusValidation());

  return new ValidationComposite(validations);
};

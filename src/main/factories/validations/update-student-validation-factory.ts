import { StudentCourse } from '@/domain/entities';
import { Validation } from '@/presentation/interfaces/validation';
import {
  ContainsInEnumValidation,
  NameWithSpacesValidation,
  RequiredFieldValidation,
  StatusValidation,
  UUIDValidation,
  ValidationComposite
} from '@/validation/validators';
import { UpdateStudentValidation } from '@/validation/validators/update-student-validation';

export const makeUpdateStudentValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  validations.push(new RequiredFieldValidation('id'));

  validations.push(new UpdateStudentValidation());
  validations.push(new UUIDValidation());
  validations.push(new NameWithSpacesValidation());
  validations.push(new ContainsInEnumValidation('course', StudentCourse));
  validations.push(new StatusValidation());

  return new ValidationComposite(validations);
};

import { StudentCourse } from '@/domain/entities';
import { makeUpdateStudentValidation } from '@/main/factories';
import { Validation } from '@/presentation/interfaces';
import {
  ContainsInEnumValidation,
  RequiredFieldValidation,
  StatusValidation,
  UUIDValidation,
  UpdateStudentValidation,
  ValidationComposite
} from '@/validation/validators';
import { NameWithSpacesValidation } from '@/validation/validators/name-with-spaces-validation';

jest.mock('@/validation/validators/validation-composite');

describe('UpdateStudentValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeUpdateStudentValidation();
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('id'));

    validations.push(new UpdateStudentValidation());
    validations.push(new UUIDValidation());
    validations.push(new NameWithSpacesValidation());
    validations.push(new ContainsInEnumValidation('course', StudentCourse));
    validations.push(new StatusValidation());

    expect(ValidationComposite).toHaveBeenCalledWith(validations);
  });
});

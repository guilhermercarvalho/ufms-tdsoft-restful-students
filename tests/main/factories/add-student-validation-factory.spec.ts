import { StudentCourse } from '@/domain/entities';
import { makeAddStudentValidation } from '@/main/factories';
import { Validation } from '@/presentation/interfaces';
import {
  ContainsInEnumValidation,
  RequiredFieldValidation,
  RGAValidation,
  StatusValidation,
  ValidationComposite
} from '@/validation/validators';
import { NameWithSpacesValidation } from '@/validation/validators/name-with-spaces-validation';

jest.mock('@/validation/validators/validation-composite');

describe('AddStudentValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddStudentValidation();
    const validations: Validation[] = [];
    for (const field of ['name', 'rga', 'course']) {
      validations.push(new RequiredFieldValidation(field));
    }

    validations.push(new NameWithSpacesValidation());
    validations.push(new RGAValidation());
    validations.push(new ContainsInEnumValidation('course', StudentCourse));
    validations.push(new StatusValidation());

    expect(ValidationComposite).toHaveBeenCalledWith(validations);
  });
});

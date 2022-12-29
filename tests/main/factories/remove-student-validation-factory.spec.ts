import { makeIdStudentValidation } from '@/main/factories';
import { Validation } from '@/presentation/interfaces';
import {
  RequiredFieldValidation,
  UUIDValidation,
  ValidationComposite
} from '@/validation/validators';

jest.mock('@/validation/validators/validation-composite');

describe('RemoveStudentValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeIdStudentValidation();
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('id'));
    validations.push(new UUIDValidation());

    expect(ValidationComposite).toHaveBeenCalledWith(validations);
  });
});

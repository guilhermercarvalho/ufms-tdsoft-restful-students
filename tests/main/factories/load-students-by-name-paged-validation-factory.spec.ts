import { makeLoadStudentsByNamePagedValidation } from '@/main/factories';
import { Validation } from '@/presentation/interfaces';
import {
  NameValidation,
  PaginationValidation,
  RequiredFieldValidation,
  ValidationComposite
} from '@/validation/validators';

jest.mock('@/validation/validators/validation-composite');

describe('LoadStudentsByNamePagedValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeLoadStudentsByNamePagedValidation();
    const validations: Validation[] = [];

    for (const field of ['name']) {
      validations.push(new RequiredFieldValidation(field));
    }

    validations.push(new NameValidation());
    validations.push(new PaginationValidation());

    expect(ValidationComposite).toHaveBeenCalledWith(validations);
  });
});

import { makeLoadStudentsPagedValidation } from '@/main/factories';
import { Validation } from '@/presentation/interfaces';
import {
  PaginationValidation,
  ValidationComposite
} from '@/validation/validators';

jest.mock('@/validation/validators/validation-composite');

describe('LoadStudentsPagedValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeLoadStudentsPagedValidation();
    const validations: Validation[] = [];

    validations.push(new PaginationValidation());

    expect(ValidationComposite).toHaveBeenCalledWith(validations);
  });
});

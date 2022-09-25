import { MissingParamError } from '@/presentation/errors';
import { RequiredFieldValidation } from '@/validation/validators';

import { faker } from '@faker-js/faker';

const field = faker.random.word();

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation(field);
};

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSut();
    const error = sut.validate({ invalidField: faker.lorem.word() });
    expect(error).toStrictEqual(new MissingParamError(field));
  });

  test('Should not return if validation succeeds', () => {
    const sut = makeSut();
    const error = sut.validate({ [field]: faker.lorem.word() });
    expect(error).toBeFalsy();
  });
});

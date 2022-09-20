import { InvalidParamError } from '@/presentation/errors';
import { CompareValidation } from '@/validation/validators';

import { faker } from '@faker-js/faker';

const field = faker.random.word();

const makeSut = (value: any): CompareValidation => {
  return new CompareValidation(field, value);
};

describe('Compare Validation', () => {
  test('Should return InvalidParamError if value is different', () => {
    const sut = makeSut(faker.random.word());
    const error = sut.validate({ [field]: faker.random.word() });
    expect(error).toStrictEqual(new InvalidParamError(field));
  });

  test('Should not return if value is equal', () => {
    const value = faker.random.word();
    const sut = makeSut(value);
    const error = sut.validate({ [field]: value });
    expect(error).toBeFalsy();
  });
});

import { InvalidParamError } from '@/presentation/errors';
import { NameWithSpacesValidation } from '@/validation/validators/name-with-spaces-validation';

import { faker } from '@faker-js/faker';

const makeSut = (): NameWithSpacesValidation => {
  return new NameWithSpacesValidation();
};

describe('NameWithSpaces Validation', () => {
  test('Should return InvalidParamError if name not contains spaces', () => {
    const sut = makeSut();
    const error = sut.validate({ name: faker.name.firstName() });
    expect(error).toStrictEqual(new InvalidParamError('name'));
  });

  test('Should return InvalidParamError if name is alpha numeric', () => {
    const sut = makeSut();
    const error = sut.validate({ name: faker.random.alphaNumeric() });
    expect(error).toStrictEqual(new InvalidParamError('name'));
  });

  test('Should not return if validation succeeds', () => {
    const sut = makeSut();
    const error = sut.validate({ name: faker.name.fullName() });
    expect(error).toBeFalsy();
  });
});

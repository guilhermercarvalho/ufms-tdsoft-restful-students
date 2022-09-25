import {
  InvalidParamError,
  InvalidParamTypeError
} from '@/presentation/errors';
import { NameValidation } from '@/validation/validators';

import { faker } from '@faker-js/faker';

const makeSut = (): NameValidation => {
  return new NameValidation();
};

describe('Name Validation', () => {
  test('Should return InvalidParamTypeError if type of name is not string', () => {
    const sut = makeSut();
    const error = sut.validate({ name: faker.random.numeric() });
    expect(error).toStrictEqual(new InvalidParamTypeError('name', 'string'));
  });

  test('Should return InvalidParamError if name is alpha numeric', () => {
    const sut = makeSut();
    const error = sut.validate({ name: faker.random.alphaNumeric(5) });
    expect(error).toStrictEqual(new InvalidParamError('name'));
  });

  test('Should not return if validation succeeds', () => {
    const sut = makeSut();
    const error = sut.validate({ name: faker.name.fullName() });
    expect(error).toBeFalsy();
  });
});

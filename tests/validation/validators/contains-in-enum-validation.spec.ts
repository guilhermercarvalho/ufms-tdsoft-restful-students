import { InvalidParamError } from '@/presentation/errors';
import { ContainsInEnumValidation } from '@/validation/validators';

import { faker } from '@faker-js/faker';

const field = faker.random.word();

enum ExempleEnum {
  'first',
  SECOND = 'second'
}

const makeSut = (): ContainsInEnumValidation => {
  return new ContainsInEnumValidation(field, ExempleEnum);
};

describe('Status Validation', () => {
  test('Should return InvalidParamError if is not in enum', () => {
    const sut = makeSut();
    const error = sut.validate({ [field]: faker.lorem.word() });
    expect(error).toStrictEqual(new InvalidParamError(field));
  });

  test('Should not return if is in enum', () => {
    const sut = makeSut();
    const errorFirst = sut.validate({ [field]: 'first' });
    const errorSecond = sut.validate({ [field]: 'second' });

    expect(errorFirst).toBeFalsy();
    expect(errorSecond).toBeFalsy();
  });
});

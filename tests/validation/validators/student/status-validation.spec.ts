import { InvalidParamError } from '@/presentation/errors';
import { StatusValidation } from '@/validation/validators';

import { faker } from '@faker-js/faker';

const makeSut = (): StatusValidation => {
  return new StatusValidation();
};

describe('Status Validation', () => {
  test('Should return InvalidParamError if is not in StudentStatus', () => {
    const sut = makeSut();
    const error = sut.validate({ status: faker.lorem.word() });
    expect(error).toStrictEqual(new InvalidParamError('status'));
  });

  test("Should not return if status is 'ativo'", () => {
    const sut = makeSut();
    const error = sut.validate({ status: 'ativo' });
    expect(error).toBeFalsy();
  });

  test("Should not return if status is 'inativo'", () => {
    const sut = makeSut();
    const error = sut.validate({ status: 'inativo' });
    expect(error).toBeFalsy();
  });

  test('Should not return if status is null', () => {
    const sut = makeSut();
    const error = sut.validate({ status: null });
    expect(error).toBeFalsy();
  });
});

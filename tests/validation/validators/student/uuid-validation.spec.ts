import { InvalidParamError } from '@/presentation/errors';
import { UUIDValidation } from '@/validation/validators';

import { faker } from '@faker-js/faker';

const makeSut = (): UUIDValidation => {
  return new UUIDValidation();
};

describe('IdUUID Validation', () => {
  test('Should return InvalidParamError if ID is not UUIDv4', () => {
    const id = faker.datatype.hexadecimal({ length: 10 });

    const sut = makeSut();
    const error = sut.validate({ id });

    expect(error).toStrictEqual(new InvalidParamError('id'));
  });

  test('Should not return if ID validation succeeds', () => {
    const id = faker.datatype.uuid();

    const sut = makeSut();
    const error = sut.validate({ id });

    expect(error).toBeFalsy();
  });
});

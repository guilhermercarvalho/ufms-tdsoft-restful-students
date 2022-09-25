import {
  InvalidParamTypeError,
  LessThanOrEqualError
} from '@/presentation/errors';
import { PaginationValidation } from '@/validation/validators';

import { faker } from '@faker-js/faker';

const makeSut = (): PaginationValidation => {
  return new PaginationValidation();
};

describe('Pagination Validation', () => {
  test('Should return InvalidParamTypeError if page or limit is not a number', () => {
    const sut = makeSut();
    const errorPage = sut.validate({ page: faker.random.word() });
    const errorLimit = sut.validate({ limit: faker.random.word() });

    expect(errorPage).toStrictEqual(
      new InvalidParamTypeError('page', 'number')
    );
    expect(errorLimit).toStrictEqual(
      new InvalidParamTypeError('limit', 'number')
    );
  });

  test('Should return LessThanOrEqualError if page or limit is lesser or equal zero', () => {
    const sut = makeSut();
    const errorPage = sut.validate({ page: 0 });
    const errorLimit = sut.validate({ limit: 0 });

    expect(errorPage).toStrictEqual(new LessThanOrEqualError('page', 0));
    expect(errorLimit).toStrictEqual(new LessThanOrEqualError('limit', 0));
  });

  test('Should not return if validation succeeds', () => {
    const sut = makeSut();
    const errorPage = sut.validate({ page: 1 });
    const errorLimit = sut.validate({ limit: 1 });

    expect(errorPage).toBeFalsy();
    expect(errorLimit).toBeFalsy();
  });
});

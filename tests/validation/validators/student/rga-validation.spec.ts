import { InvalidParamError } from '@/presentation/errors';
import { RGAValidation } from '@/validation/validators/rga-validation';

import { faker } from '@faker-js/faker';

const makeSut = (): RGAValidation => {
  return new RGAValidation();
};

describe('RGA Validation', () => {
  test('Should return InvalidParamError if RGA is not valid in size', () => {
    const rga =
      faker.random.numeric(4) +
      faker.random.numeric(4) +
      faker.random.numeric(3) +
      faker.random.numeric(2);

    const sut = makeSut();
    const error = sut.validate({ rga });

    expect(rga.length).toBe(13);
    expect(error).toStrictEqual(new InvalidParamError('rga'));
  });

  test('Should return InvalidParamError if RGA is not valid in normalization', () => {
    const rga =
      faker.random.numeric(3) +
      faker.lorem.word(1) +
      '.' +
      faker.random.numeric(3) +
      faker.lorem.word(1) +
      '.' +
      faker.random.numeric(2) +
      faker.lorem.word(1) +
      '-' +
      faker.random.numeric(1);

    const sut = makeSut();
    const error = sut.validate({ rga });

    expect(rga.length).toBe(15);
    expect(error).toStrictEqual(new InvalidParamError('rga'));
  });

  test('Should not return if RGA validation succeeds', () => {
    const rga =
      faker.random.numeric(4) +
      '.' +
      faker.random.numeric(4) +
      '.' +
      faker.random.numeric(3) +
      '-' +
      faker.random.numeric(1);

    const rgaOnlyNumbers = rga.replace(/\.|-/g, '');

    const sut = makeSut();
    const error = sut.validate({ rga });
    const errorOnlyNumbers = sut.validate({ rga: rgaOnlyNumbers });

    expect(rga.length).toBe(15);
    expect(error).toBeFalsy();

    expect(rgaOnlyNumbers.length).toBe(12);
    expect(errorOnlyNumbers).toBeFalsy();
  });
});

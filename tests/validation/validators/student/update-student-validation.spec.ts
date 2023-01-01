import { MissingParamUpdateError } from '@/presentation/errors/missing-param-update-error';
import { UpdateStudentValidation } from '@/validation/validators';

import { faker } from '@faker-js/faker';

const makeSut = (): UpdateStudentValidation => {
  return new UpdateStudentValidation();
};

describe('Update Student Validation', () => {
  test('Should return MissingParamUpdateError if param to update is empty', () => {
    const sut = makeSut();
    const error = sut.validate({ id: faker.datatype.uuid() });
    expect(error).toStrictEqual(new MissingParamUpdateError());
  });

  test('Should not return if exist at least one valid param', () => {
    const sut = makeSut();
    const error = sut.validate({
      id: faker.datatype.uuid(),
      name: faker.name.fullName()
    });
    expect(error).toBeFalsy();
  });
});

import { ItemAlreadyExists, ItemNotFound } from '@/presentation/errors';

export const throwError = (): never => {
  throw new Error();
};

export const throwStudentAlreadyExists = (): never => {
  throw new ItemAlreadyExists('Student');
};

export const throwStudentNotFound = (): never => {
  throw new ItemNotFound('Student');
};

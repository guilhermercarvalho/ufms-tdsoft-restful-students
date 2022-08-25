import { InvalidParamError, InvalidQueryTypeError } from 'core/error';
import validator from 'validator';

export function validateName(name: string) {
  validateNameType(name);
  const isAlpha = validator.isAlpha(removeSpaces(name), 'pt-BR');
  if (!isAlpha) throw new InvalidParamError('name');
}

export function validateNameWithSpaces(name: string) {
  validateNameType(name);
  const hasSpace = /\s/g.test(name);
  if (!hasSpace) throw new InvalidParamError('name');
  validateName(name);
}

function validateNameType(name: string) {
  if (typeof name !== 'string') throw new InvalidQueryTypeError('name');
}

function removeSpaces(name: string): string {
  return name.trim().replace(/\s/g, '');
}

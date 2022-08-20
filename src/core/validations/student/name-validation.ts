import { InvalidParamError, InvalidQueryTypeError } from 'core/error';
import validator from 'validator';

export function validateName(name: string) {
  if (typeof name !== 'string') throw new InvalidQueryTypeError('name');

  const isAlpha = validator.isAlpha(removeSpaces(name), 'pt-BR');
  if (!isAlpha) throw new InvalidParamError('name');
}

export function validateNameWithSpaces(name: string) {
  validateName(name);

  const hasSpace = /\s/g.test(name);
  if (!hasSpace) throw new InvalidParamError('name');
}

function removeSpaces(name: string): string {
  return name.trim().replace(/\s/g, '');
}

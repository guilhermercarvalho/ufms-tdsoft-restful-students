import { InvalidQueryTypeError, SizeQueryError } from 'core/error';

export function validatePagination(query: string, value: number) {
  if (isNaN(value)) throw new InvalidQueryTypeError(`${query}`);
  if (Number(value) < 1) throw new SizeQueryError(`${query}`, 0);
}

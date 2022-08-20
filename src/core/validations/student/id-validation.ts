import { InvalidParamError } from 'core/error';
import validator from 'validator';

export function validateId(id: string) {
  const hasValidUUIDv4 = validator.isUUID(id, 4);
  if (!hasValidUUIDv4) throw new InvalidParamError('id');
}

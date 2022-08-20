import { StudentStatus } from 'core/entities';
import { InvalidParamError } from 'core/error';

const STATUS_VALUES = Object.values(StudentStatus);

export function validateStatus(status: string) {
  const hasValidStatus = STATUS_VALUES.includes(status as StudentStatus);
  if (!hasValidStatus) throw new InvalidParamError('status');
}

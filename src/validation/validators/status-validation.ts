import { StudentStatus } from '@/domain/entities';
import { Validation } from '@/presentation/interfaces/validation';
import { ContainsInEnumValidation } from './contains-in-enum-validation';

export class StatusValidation implements Validation {
  validate(input: any): Error {
    if (input['status']) {
      const error = new ContainsInEnumValidation(
        'status',
        StudentStatus
      ).validate(input);
      if (error) return error;
    }
  }
}

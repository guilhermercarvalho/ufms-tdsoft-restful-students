import { EmptyParamError } from 'core/error';
import { StudentRepository } from 'core/repositories';
import {
  validateCourse,
  validateName,
  validateRGA,
  validateStatus
} from 'core/validations';

export class CreateOneStudentUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(name: string, rga: string, course: string, status?: string) {
    if (!name) throw new EmptyParamError('name');
    if (!rga) throw new EmptyParamError('rga');
    if (!course) throw new EmptyParamError('course');

    validateName(name);
    validateRGA(rga);
    validateCourse(course);
    if (status) validateStatus(status);

    return this.studentRepository.createOneStudent(name, rga, course, status);
  }
}

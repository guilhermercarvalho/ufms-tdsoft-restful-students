import { EmptyParamError } from 'core/error';
import { StudentRepository } from 'core/repositories';
import {
  validateCourse,
  validateId,
  validateName,
  validateRGA,
  validateStatus
} from 'core/validations';

export class UpdateOneStudentUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(
    id: string,
    name?: string,
    rga?: string,
    course?: string,
    status?: string
  ) {
    if (!id) throw new EmptyParamError('id');

    validateId(id);

    let missing = 0;
    if (!name) missing += 1;
    if (!rga) missing += 1;
    if (!course) missing += 1;
    if (!status) missing += 1;

    if (missing === 4) throw new EmptyParamError('none informed');

    if (name) validateName(name);
    if (rga) validateRGA(rga);
    if (course) validateCourse(course);
    if (status) validateStatus(status);

    return this.studentRepository.updateOneStudent(
      id,
      name,
      rga,
      course,
      status
    );
  }
}

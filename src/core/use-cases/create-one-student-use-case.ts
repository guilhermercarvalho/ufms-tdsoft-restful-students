import { StudentCourse, StudentStatus } from 'core/entities';
import { EmptyParamError, InvalidParamError } from 'core/error';
import { StudentRepository } from 'core/repositories';

export class CreateOneStudentUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(name: string, rga: string, course: string, status?: string) {
    if (!name) throw new EmptyParamError('name');
    if (!rga) throw new EmptyParamError('rga');
    if (!course) throw new EmptyParamError('course');

    const courseValues = Object.values(StudentCourse);
    const statusValues = Object.values(StudentStatus);

    if (!courseValues.includes(course as StudentCourse))
      throw new InvalidParamError('course');

    if (status && !statusValues.includes(status as StudentStatus))
      throw new InvalidParamError('status');

    const rgaFormated = rga.replace(/\.|-/g, '');

    if (rgaFormated.length !== 12 || isNaN(rgaFormated as any))
      throw new InvalidParamError('rga');

    return this.studentRepository.createOneStudent(name, rga, course, status);
  }
}

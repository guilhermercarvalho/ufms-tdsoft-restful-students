import { StudentCourse } from 'core/entities';
import { InvalidParamError } from 'core/error';

const COURSE_VALUES = Object.values(StudentCourse);

export function validateCourse(course: string) {
  const harValidCourse = COURSE_VALUES.includes(course as StudentCourse);
  if (!harValidCourse) throw new InvalidParamError('course');
}

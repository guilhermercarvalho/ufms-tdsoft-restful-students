import { StudentModel } from '@/data/models';
import {
  AddStudentRepository,
  LoadStudentsRepository
} from '@/data/repositories';
import { StudentStatus } from '@/domain/entities';
import { DateTime } from 'luxon';

import { uuid } from 'uuidv4';

export class FakeStudentRepository implements LoadStudentsRepository {
  private data: StudentModel[] = [];

  async add(data: AddStudentRepository.Params): Promise<StudentModel> {
    const student: StudentModel = {
      ...data,
      id: uuid(),
      status: data.status ? data.status : StudentStatus.ACTIVE,
      registeredIn: DateTime.utc().toJSDate()
    };
    this.data.push(student);
    return student;
  }

  async loadAll(): Promise<StudentModel[]> {
    return this.data;
  }

  count(): number {
    return this.data.length;
  }

  clear(): void {
    this.data = [];
  }
}

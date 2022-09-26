import { StudentModel } from '@/data/models';
import {
  AddStudentRepository,
  LoadStudentsRepository
} from '@/data/repositories';
import { StudentStatus } from '@/domain/entities';

import { DateTime } from 'luxon';
import { v4 as uuid } from 'uuid';

export class FakeStudentRepository implements LoadStudentsRepository {
  private data: StudentModel[] = [];

  async add(params: AddStudentRepository.Params): Promise<StudentModel> {
    const student: StudentModel = {
      ...params,
      id: uuid(),
      status: params.status ? params.status : StudentStatus.ACTIVE,
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

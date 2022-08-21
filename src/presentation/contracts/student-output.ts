import { StudentModel } from 'core/models';
import env from 'main/config/env';
import { StudentView } from 'presentation/views';

export function getStudentOutput(student: StudentModel): StudentView {
  return {
    rga: student.rga,
    nome: student.name,
    curso: student.course,
    situacao: student.status,
    registrado_em: formatDate(student.registeredIn)
  };
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleString('pt-BR', {
    timeZone: env.timeZone
  });
}

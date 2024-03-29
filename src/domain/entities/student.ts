export enum StudentCourse {
  CC = 'cc',
  SI = 'si',
  ECOMP = 'ecomp',
  ENGSOFT = 'engsoft',
  TADS = 'tads',
  TRC = 'trc'
}

export enum StudentStatus {
  ACTIVE = 'ativo',
  INACTIVE = 'inativo'
}

export type Student = {
  id: string;
  rga: string;
  name: string;
  course: string;
  status: string;
  registeredIn: Date;
};

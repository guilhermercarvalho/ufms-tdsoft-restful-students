export interface Student {
  id: string;
  rga: string;
  name: string;
  course: string;
  status: string;
  registeredIn: Date;
}

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

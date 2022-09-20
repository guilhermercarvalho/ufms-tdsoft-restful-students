export enum StudentCourse {
  'cc',
  'si',
  'ecomp',
  'engsoft',
  'tads',
  'trc'
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

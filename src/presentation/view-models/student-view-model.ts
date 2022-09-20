import { Student } from '@/domain/entities';
import env from '@/main/config/env';

import { DateTime } from 'luxon';

export class StudentViewModel {
  public id: string;
  public rga: string;
  public nome: string;
  public curso: string;
  public situacao: string;
  public registrado_em: string;

  static map(entity: Student): StudentViewModel {
    return {
      id: entity.id,
      rga: entity.rga,
      nome: entity.name,
      curso: entity.course,
      situacao: entity.status,
      registrado_em: DateTime.fromISO(
        new Date(entity.registeredIn).toISOString(),
        {
          zone: 'utc'
        }
      )
        .setZone(env.timezone)
        .setLocale('pt-BR')
        .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
    };
  }

  static mapCollection(entities: Student[]): StudentViewModel[] {
    return entities.map((entity) => StudentViewModel.map(entity));
  }
}

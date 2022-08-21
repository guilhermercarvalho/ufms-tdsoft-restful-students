import { PaginationModel } from 'core/models';
import { SelectQueryBuilder } from 'typeorm';
import { SQLiteStudentEntity } from '../typeorm/entities';
import { MySQLStudentEntity } from '../typeorm/mysql/entities';
import { PostgresStudentEntity } from '../typeorm/postgres/entities';

export class PaginationHelper {
  private static readonly DEFAULT_PAGE = 1;
  private static readonly DEFAULT_LIMIT = 25;

  public static async getQueryPagedTypeorm(
    queryBuilder: SelectQueryBuilder<
      PostgresStudentEntity | MySQLStudentEntity | SQLiteStudentEntity
    >,
    page?: number,
    take?: number
  ): Promise<{
    page: number;
    take: number;
    itemCount: number;
    entities: Array<
      PostgresStudentEntity | MySQLStudentEntity | SQLiteStudentEntity
    >;
  }> {
    const pageSelected = page ?? this.DEFAULT_PAGE;
    const takeSelected = page ?? this.DEFAULT_LIMIT;

    const skip = this.getOffset(pageSelected, takeSelected);

    queryBuilder.skip(skip).take(take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return { page: pageSelected, take: takeSelected, itemCount, entities };
  }

  private static getOffset = (page: number, limit: number) => {
    return (page - 1) * limit;
  };

  public static getPage = (
    page: number,
    limit: number,
    itemCount: number,
    result: Array<
      PostgresStudentEntity | MySQLStudentEntity | SQLiteStudentEntity
    >
  ): PaginationModel => {
    const pageCount = Math.ceil(itemCount / limit);
    return {
      pagination: {
        page: page,
        limit: limit,
        pageCount,
        hasNextPage: page < pageCount,
        hasPreviusPage: page > 1 && page <= pageCount
      },
      resultSize: result.length,
      result
    };
  };
}

import { PaginationModel } from '@/data/models';

import { SelectQueryBuilder } from 'typeorm';

export class PaginationHelper {
  private static readonly DEFAULT_PAGE = 1;
  private static readonly DEFAULT_LIMIT = 25;

  static async getPagination(
    queryBuilder: SelectQueryBuilder<any>,
    page?: number,
    take?: number
  ): Promise<PaginationModel> {
    const pageSelected = page ? Number(page) : this.DEFAULT_PAGE;
    const takeSelected = take ? Number(take) : this.DEFAULT_LIMIT;

    const skip = this.getOffset(pageSelected, takeSelected);

    queryBuilder.skip(skip).take(takeSelected);

    const pageCount = Math.ceil((await queryBuilder.getCount()) / takeSelected);
    console.log({
      pageCount,
      queryCount: await queryBuilder.getCount(),
      limit: takeSelected
    });
    const { entities } = await queryBuilder.cache(true).getRawAndEntities();

    return {
      pagination: {
        page: pageSelected,
        limit: takeSelected,
        pageCount,
        hasNextPage: pageSelected < pageCount,
        hasPreviusPage: pageSelected > 1 && pageSelected <= pageCount + 1
      },
      resultSize: entities.length,
      result: entities
    };
  }

  private static getOffset = (page: number, limit: number) => {
    return (page - 1) * limit;
  };
}

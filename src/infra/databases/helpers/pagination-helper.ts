import { PaginationModel } from 'core/models';

export class PaginationHelper {
  public static readonly DEFAULT_PAGE = 1;
  public static readonly DEFAULT_LIMIT = 25;

  static getOffset = (page: number, limit: number) => {
    return (page - 1) * limit;
  };

  static getPage = (
    page: number,
    limit: number,
    itemCount: number,
    result: any
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

export interface PaginationModel {
  pagination: {
    page: number;
    limit: number;
    pageCount: number;
    hasNextPage: boolean;
    hasPreviusPage: boolean;
  };
  resultSize: number;
  result: any[];
}

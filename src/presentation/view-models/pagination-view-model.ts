import { PaginationModel } from '@/data/models';

export class PaginationViewModel {
  public paginacao: Paginacao;
  public tamanho: number;
  public resultado: any[];

  static map(pagination: PaginationModel, result: any): PaginationViewModel {
    return {
      paginacao: {
        pagina: pagination.pagination.page,
        limite: pagination.pagination.limit,
        paginas: pagination.pagination.pageCount,
        temProximaPagina: pagination.pagination.hasNextPage,
        temPaginaAnterior: pagination.pagination.hasPreviusPage
      },
      tamanho: pagination.resultSize,
      resultado: result
    };
  }
}

type Paginacao = {
  pagina: number;
  limite: number;
  paginas: number;
  temProximaPagina: boolean;
  temPaginaAnterior: boolean;
};

export interface PaginationView {
  paginacao: {
    pagina: number;
    limite: number;
    paginas: number;
    temProximaPagina: boolean;
    temPaginaAnterior: boolean;
  };
  tamanho: number;
  resultado: any[];
}

export interface ISQLDatabaseWrapper {
  query(
    queryString: string,
    queryData?: unknown[]
  ): Promise<{ rows: unknown[] }>;
}

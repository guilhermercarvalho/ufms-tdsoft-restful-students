export interface ISQLDatabaseWrapper {
  query(queryString: string, queryData?: any[]): Promise<{ rows: any[] }>
}
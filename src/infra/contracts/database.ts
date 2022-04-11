export interface IDatabase<T = any> {
  connect: () => Promise<T>;
  getConnection: () => T;
}

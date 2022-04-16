export interface Database<T = any> {
  connect: () => Promise<T>;
  getConnection: () => T;
}

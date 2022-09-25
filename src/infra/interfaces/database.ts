export interface Database<T = any> {
  connect: () => Promise<T>;
  disconnect: () => Promise<void>;
}

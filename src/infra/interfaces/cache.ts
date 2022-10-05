export interface Cache {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  status: () => string;
}

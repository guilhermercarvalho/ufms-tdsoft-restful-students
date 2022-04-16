export class SizeQueryError extends Error {
  constructor(query: string, size: number) {
    super(`"${query}" has to be gratter than: ${size}`);
  }
}

export class InvalidQueryTypeError extends Error {
  constructor(query: string) {
    super(`Invalid query: '${query}'`);
  }
}

export class InvalidIdError extends Error {
  constructor(param: string) {
    super(`Invalid param: '${param}'`);
  }
}

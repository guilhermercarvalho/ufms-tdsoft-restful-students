export class InvalidIdError extends Error {
  constructor(id: string) {
    super(`Invalid id: "${id}"`);
  }
}

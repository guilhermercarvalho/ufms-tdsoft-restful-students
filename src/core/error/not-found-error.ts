export class NotFoundError extends Error {
  constructor(id: string) {
    super(`ID not found: '${id}'`);
  }
}

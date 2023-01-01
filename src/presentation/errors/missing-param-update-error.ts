export class MissingParamUpdateError extends Error {
  constructor() {
    super(`Missing at least on param to update`);
    this.name = 'MissingParamUpdateError';
  }
}

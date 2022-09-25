export class LessThanOrEqualError extends Error {
  constructor(paramName: string, length: number) {
    super(`'${paramName}' is lesser or equal than ${length}`);
    this.name = 'LessThanOrEqualError';
  }
}

export class InvalidParamTypeError extends Error {
  constructor(paramName: string, typeExpected: string) {
    super(`Invalid param type: ${paramName} expected type was ${typeExpected}`);
    this.name = 'InvalidParamTypeError';
  }
}

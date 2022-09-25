export class InvalidParamTypeError extends Error {
  constructor(paramName: string, typeExpected: string) {
    super(
      `Invalid parameter type '${paramName}' expected was '${typeExpected}'`
    );
    this.name = 'InvalidParamTypeError';
  }
}

export class ServerUnavailable extends Error {
  constructor(stack: string | undefined) {
    super('Server Unavailable');
    this.name = 'ServerUnavailable';
    this.stack = stack;
  }
}

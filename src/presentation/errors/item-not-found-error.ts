export class ItemNotFound extends Error {
  constructor(item: string) {
    super(`${item} not found`);
    this.name = 'ItemNotFound';
  }
}

export class ItemAlreadyExists extends Error {
  constructor(item: string) {
    super(`${item} already exists`);
    this.name = 'ItemAlreadyExists';
  }
}

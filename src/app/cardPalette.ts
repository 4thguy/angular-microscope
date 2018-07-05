export class CardPalette {
  yes: string[];
  no: string[];

  constructor() {
    this.yes = [];
    this.no = [];
  }

  addToYes(item: string): boolean {
    this.yes.push(item);
    return true;
  }

  addToNo(item: string): boolean {
    this.no.push(item);
    return true;
  }
}
export class CardFocus {
  focai: string[];

  constructor() {
    this.focai = [];
  }

  addToFocus(item: string) {
    this.focai.push(item);
  }
}

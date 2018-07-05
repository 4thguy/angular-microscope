import { CardLegacy } from './cardLegacy';
import { CardPalette } from './cardPalette';
import { CardPeriod } from './cardPeriod';

export class CardTable {
  static singleton: CardTable;

  palette: CardPalette;
  periods: CardPeriod[];
  legacies: CardLegacy[];

  constructor() {
    this.palette = new CardPalette();
    this.periods = [];
    this.legacies = [];
  }

  static getSingleton(): CardTable {
    if (this.singleton == undefined) {
      this.singleton = new CardTable();
    }
    return this.singleton;
  }

  addLegacy(newFocus: CardLegacy): boolean {
    this.legacies.push(newFocus);
    return true;
  }

  addPeriod(newEvent: CardPeriod, insertAt: number): boolean {
    if (
      (insertAt > 0) && (insertAt < this.periods.length) ||
      (this.periods.length < 2)
    ) {
        this.periods.splice(insertAt, 0, newEvent);
        return true;
    }
    return false;
  }
}

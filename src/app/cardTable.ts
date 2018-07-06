import { CardLegacy } from './cardLegacy';
import { CardPalette } from './cardPalette';
import { CardPeriod } from './cardPeriod';
import { Player } from './player';
import { AppState } from './appState';

export class CardTable {
  static singleton: CardTable;

  data: object;

  appState: AppState;

  title: string;
  players: Player[];
  palette: CardPalette;
  periods: CardPeriod[];
  legacies: CardLegacy[];

  constructor() {
    this.appState = AppState.BigPicture;

    this.data = {};

    this.players = [];
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

  addPlayer(newPlayer: Player): boolean {
    this.players.push(newPlayer);
    return true;
  }
  removePlayer(oldPlayer: Player): boolean {
    this.players = this.players.filter(function(el) {
        return el !== oldPlayer;
    });
    return true;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setBookends(start: CardPeriod, end: CardPeriod) {
    this.addPeriod(start, 0);
    this.addPeriod(end, 1);
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

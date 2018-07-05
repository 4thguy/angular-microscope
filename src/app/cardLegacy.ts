import { Player } from './player';

export class CardLegacy {
  id: number;
  title: string;
  lens: Player;

  constructor(title: string, lens: Player) {
    this.title = title;
    this.lens = lens;
  }
}

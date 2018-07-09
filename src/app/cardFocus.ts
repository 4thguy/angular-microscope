import { Player } from './player';

export class CardFocus {
  title: string;
  lens: Player;

  constructor(title: string, player: Player) {
    this.title = title;
    this.lens = player;
  }
}

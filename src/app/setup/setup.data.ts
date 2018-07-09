import { Player } from '../player';

export class SetupData {
  nextName: string;
  bigPicture: string;
  bookends: Object;
  palette: Object;

  constructor() {
    this.bookends = new Object();
    this.bookends.start = {
      title: '',
      light: false,
    };
    this.bookends.end = {
      title: '',
      light: false,
    };
    this.palette = new Object();
    this.palette.currentPlayer = new Player();
    this.palette.yes = '';
    this.palette.no = '';
    this.palette.lastRound = false;
  };
}

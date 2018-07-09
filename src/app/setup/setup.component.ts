import { Component, OnInit } from '@angular/core';
import { SetupData } from './setup.data';
import { Player } from '../player';
import { CardTable } from '../cardTable';
import { CardLegacy } from '../cardLegacy';
import { CardPeriod } from '../cardPeriod';
import { CardEvent } from '../cardEvent';
import { CardScene } from '../cardScene';

import { AppState } from '../appState';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  appState: AppState;
  AppState = AppState;

  data: SetupData;
  table: CardTable;

  constructor() { }

  ngOnInit() {
    this.data = new SetupData();
    this.table = CardTable.getSingleton();
    this.appState = AppState.Players;
  }

  onSubmitPlayer() {
    var newPlayer = new Player(this.data.nextName);
    this.table.addPlayer(newPlayer);
    this.data.nextName = '';
  }
  onDeletePlayer(player: Player) {
    this.table.removePlayer(player);
  }
  onSubmitPlayers() {
    if (this.table.players.length>0) {
      this.appState = AppState.BigPicture;
    }
  }

  onSubmitBigPicture() {
      this.table.title = this.data.bigPicture;

      this.appState = AppState.BookendHistory
  }

  onSubmitBookends() {
    var startPeriod = new CardPeriod(this.data.bookends.start.title, this.data.bookends.start.light);
    var endPeriod = new CardPeriod(this.data.bookends.end.title, this.data.bookends.end.light);
    this.table.setBookends(startPeriod, endPeriod);


    console.log(this.table.players);
    this.data.palette.currentPlayer = this.table.players[0];

    this.appState = AppState.Palette;
  }

  onSubmitPalette(type: string) {
    type = type.toLowerCase();

    if (type === 'yes') {
      this.table.palette.addToYes(this.data.palette.yes);
      this.data.palette.yes = '';
    } else if (type === 'no') {
      this.table.palette.addToNo(this.data.palette.no);
      this.data.palette.no = '';
    }

    this.paletteNextPlayer();
    this.onSubmitPaletteAfter();
  }

  onSubmitPaletteSkip() {
    this.data.palette.lastRound = true;
    this.paletteNextPlayer();
    this.onSubmitPaletteAfter();
  }

  onSubmitPaletteEnd() {
    var i = this.table.players.indexOf(this.data.palette.currentPlayer);
    if ((i === 0) || (i === this.table.players.length - 1)) {
      this.appState = AppState.Rounds;
    }
  }

  onSubmitPaletteAfter() {
    if (this.data.palette.lastRound) {
      var i = this.table.players.indexOf(this.data.palette.currentPlayer);
      if (i === 0) {
        this.appState = AppState.Rounds;
      }
    }
  }

  paletteNextPlayer() {
    var newIndex = this.table.players.indexOf(this.data.palette.currentPlayer)+1;
    if (this.table.players[newIndex] === undefined) {
      newIndex = 0;
    }
    this.data.palette.currentPlayer = this.table.players[newIndex];
  }
}

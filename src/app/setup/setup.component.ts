import { Component, OnInit } from '@angular/core';

import { SetupState } from './setup.state';
import { SetupData } from './setup.data';

import { Player } from '../player';

import { CardTable } from '../cardTable';
import { CardLegacy } from '../cardLegacy';
import { CardPeriod } from '../cardPeriod';
import { CardEvent } from '../cardEvent';
import { CardScene } from '../cardScene';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  setupState: SetupState;
  SetupState = SetupState;

  data: SetupData;
  table: CardTable;

  constructor() { }

  ngOnInit() {
    this.data = new SetupData();
    this.table = CardTable.getSingleton();
    this.setupState = SetupState.Players;
    this.setupState = SetupState.Finished;
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
      this.setupState = SetupState.BigPicture;
    }
  }

  onSubmitBigPicture() {
      this.table.title = this.data.bigPicture;

      this.setupState = SetupState.BookendHistory
  }

  onSubmitBookends() {
    var startPeriod = new CardPeriod(this.data.bookends.start.title, this.data.bookends.start.light);
    var endPeriod = new CardPeriod(this.data.bookends.end.title, this.data.bookends.end.light);
    this.table.setBookends(startPeriod, endPeriod);

    this.data.palette.currentPlayer = this.table.players[0];

    this.setupState = SetupState.Palette;
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
      this.setupState = SetupState.Rounds;
    }
  }

  onSubmitPaletteAfter() {
    if (this.data.palette.lastRound) {
      var i = this.table.players.indexOf(this.data.palette.currentPlayer);
      if (i === 0) {
        this.setupState = SetupState.Rounds;
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

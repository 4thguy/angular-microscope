import { Component, OnInit } from '@angular/core';
import { GameState } from './game.state';
import { GameStateTrigger } from './game.state.trigger';

import { Player } from '../player';

import { CardTable } from '../cardTable';
import { CardLegacy } from '../cardLegacy';
import { CardPeriod } from '../cardPeriod';
import { CardEvent } from '../cardEvent';
import { CardScene } from '../cardScene';
import { CardFocus } from '../cardFocus';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameState: GameState;
  GameState = GameState;

  table: CardTable;
  currentLens: Player;
  currentPlayer: Player;

  textbox: string;
  textbox2: string;

  constructor() {
    this.gameState = GameState.Start;
    this.table = CardTable.getSingleton();
    this.textbox = '';
  }

  ngOnInit() {
  }

  onSubmitFocus(): void {
    var focusText = this.textbox;
    var newFocus = new CardFocus(focusText, this.currentLens);
    this.table.addFocus(newFocus);
    this.triggerNext();
  }
  onSubmitPeriodEventScene(): void {
    var text = this.textbox;
    var text2 = this.textbox2;
  }

  addCard(type: string, period: CardPeriod, event: CardEvent, scene: CardScene) {
    switch (type) {
      case 'period':
        // code...
        break;
      case 'event':
        break;
      case 'scene':
        break;

      default:
        // code...
        break;
    }
  }

  nextPlayerInQueue(): Player {
      var i = this.table.players.indexOf(this.currentLens);
      i++;
      if (i === this.table.players.length - 1) {
        i = 0;
      }
      return this.table.players[i];
  }
  nextLens(): void {
    if (this.currentLens === undefined) {
      this.currentLens = this.table.players[0];
    } else {
      this.currentLens = this.nextPlayerInQueue();
    }
  }
  nextPlayer(): void {
    if (this.currentLens === undefined) {
      this.currentLens = this.table.players[0];
    } else {
      this.currentPlayer = this.nextPlayerInQueue();
    }
  }

  canNextStep(): boolean {
    switch (this.gameState) {
      case GameState.Start:
      case GameState.NextLens:
      case GameState.Talk:
        return true;
        break;

      default:
        return false;
        break;
    }
  }

  currentStateString(): string {
    return GameStateTrigger.currentStateString(this.gameState);
  }

  triggerRollback(): void {
    this.gameState = GameStateTrigger.triggerRollback(this.gameState);
  }
  triggerNext(): void {
    this.gameState = GameStateTrigger.triggerNext(this.gameState);
  }
}

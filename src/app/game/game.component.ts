import { Component, OnInit } from '@angular/core';
import { GameState } from './game.state';

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
    switch (this.gameState) {
      case GameState.Start:
        return "Start";
        break;
      case GameState.DeclareFocus:
        return "Declare Focus";
        break;
      case GameState.AddPeriodEventScene:
        return "Add Period / Event / Scene";
        break;
      case GameState.SubmitPeriodEventScene:
        return "Submit Period / Event / Scene";
        break;
      case GameState.NextLens:
        return "Choosing next Lens"
        break;
      case GameState.ChooseLegacy:
        return "Select Legacy"
        break;
      case GameState.ExploreLegacy:
        return "Explore Legacy"
        break;
      case GameState.Talk:
        return "Talk";
        break;
      case GameState.Finish:
        return "Finished";
        break;

      default:
        // code...
        break;
    }
  }

  triggerNext() {
    switch (this.gameState) {
      case GameState.Start:
        this.nextLens();
        this.gameState = GameState.DeclareFocus;
        break;
      case GameState.DeclareFocus:
        this.gameState = GameState.AddPeriodEventScene;
        break;
      case GameState.AddPeriodEventScene:
        this.gameState = GameState.SubmitPeriodEventScene;
        break;
      case GameState.SubmitPeriodEventScene:
        this.gameState = GameState.NextLens;
        break;
      case GameState.NextLens:
        this.gameState = GameState.ChooseLegacy;
        break;
      case GameState.ChooseLegacy:
        this.gameState = GameState.ExploreLegacy;
        break;
      case GameState.ExploreLegacy:
        this.gameState = GameState.Talk;
        break;
      case GameState.Talk:
        this.gameState = GameState.Finish;
        break;
      case GameState.Finish:
        // code
        break;

      default:
        // code...
        break;
    }
  }
}

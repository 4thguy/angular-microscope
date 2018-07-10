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

  previousLens: Player;
  currentLens: Player;
  currentPlayer: Player;

  textbox: string;
  textbox2: string;

  roundNumber: number;
  roundIterator: number;

  constructor() {
    this.gameState = GameState.Start;
    this.table = CardTable.getSingleton();
    this.textbox = '';
    this.roundNumber = 0;
    this.roundIterator = 0;
  }

  ngOnInit() {
  }

  isInLegacyMode(): boolean {
    return (
      this.gameState === GameState.ChooseLegacy ||
      this.gameState === GameState.ExploreLegacy ||
      this.gameState === GameState.SubmitLegacy
    );
  }
  isInAddPeriodEventSceneMode(): boolean {
    return (
      this.gameState === GameState.AddPeriodEventScene ||
      this.gameState === GameState.ExploreLegacy
    );
  }

  beforeCycleRound(): void {
    this.triggerNext();
  }
  afterCycleRound(): void {
    if (this.isInLegacyMode()) {
      this.triggerNext();
    } else if (this.roundIterator === this.table.players.length + 1) {
      this.roundIterator = 0;
      this.triggerNext();
    } else {
      this.triggerRollback();
    }
    this.nextPlayer();
  }

  addCard(type: string, period: CardPeriod, event: CardEvent, scene: CardScene) {
    switch (type) {
      case 'period':
        this.beforeCycleRound();
        var i = this.table.periods.indexOf(period);
        i++;
        var newPeriod = new CardPeriod("NEW PERIOD", true);
        this.table.addPeriod(newPeriod, i);
        this.afterCycleRound();
        break;
      case 'event':
        this.beforeCycleRound();
        var i = period.events.indexOf(event);
        i++;
        var newEvent = new CardEvent("NEW EVENT", true);
        period.addEvent(newEvent, i);
        this.afterCycleRound();
        break;
      case 'scene':
        this.beforeCycleRound();
        var i = event.scenes.indexOf(scene);
        i++;
        var newScene = new CardScene("NEW SCENE", "ANSWER", true);
        event.addScene(newScene, i);
        this.afterCycleRound();
        break;

      default:
        // code...
        break;
    }
  }

  nextPlayerInQueue(player: Player): Player {
      var i = this.table.players.indexOf(player);
      i++;
      if (i === this.table.players.length) {
        i = 0;
      }
      return this.table.players[i];
  }
  nextLens(): void {
    if (this.currentLens === undefined) {
      this.currentLens = this.table.players[0];
      this.previousLens = this.table.players[this.table.players.length - 1]
    } else {
      this.previousLens = this.currentLens;
      this.currentLens = this.nextPlayerInQueue(this.currentLens);
    }
    this.roundNumber++;
  }
  nextPlayer(): void {
    if (this.currentPlayer === undefined) {
      this.currentPlayer = this.table.players[0];
    } else {
      this.currentPlayer = this.nextPlayerInQueue(this.currentPlayer);
    }
    this.roundIterator++;
  }

  canSubmitNextStep(): boolean {
    switch (this.gameState) {
      case GameState.Start:
      case GameState.Talk:
        return true;

      default:
        return false;
    }
  }
  onSubmit(next:boolean): void {
    if (next) {
      switch (this.gameState) {
        case GameState.Start:
          this.nextLens();
          this.nextPlayer();
          break;
      }
      this.triggerNext();
    } else {
      switch (this.gameState) {
        case GameState.Start:
          break;
        case GameState.SelectLens:
          break;
        case GameState.DeclareFocus:
          var focusText = this.textbox;
          this.textbox = '';
          this.table.focai.addToFocus(focusText);
          this.triggerNext();
          break;
        case GameState.AddPeriodEventScene:
          var text = this.textbox;
          var text2 = this.textbox2;
          this.textbox = '';
          this.textbox2 = '';
          break;
        case GameState.SubmitPeriodEventScene:
          break;
        case GameState.ChooseLegacy:
          var legacyText = this.textbox;
          this.textbox = '';
          var newLegacy = new CardLegacy(legacyText, this.previousLens);
          this.table.addLegacy(newLegacy);
          this.triggerNext();
          break;
        case GameState.ExploreLegacy:
          break;
         case GameState.SubmitLegacy:
          break;
        case GameState.Talk:
          this.gameState = GameState.DeclareFocus;
        case GameState.Finish:
          break;

        default:
          // code...
          break;
      }
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

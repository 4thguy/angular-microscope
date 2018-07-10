import { Component } from '@angular/core';

import { AppState } from './appState';

import { Player } from './player';

import { CardTable } from './cardTable';
import { CardLegacy } from './cardLegacy';
import { CardPeriod } from './cardPeriod';
import { CardEvent } from './cardEvent';
import { CardScene } from './cardScene';
import { CardFocus } from './cardFocus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  AppState = AppState;

  table: CardTable;

  ngOnInit() {
    this.table = CardTable.getSingleton();
    this.testData();
  }

  testData(): void {
    // var a = new CardPeriod("Allfather creates mortal world", true);
    // var b = new CardPeriod("Gods war against the Colossai", false);
    // var c = new CardPeriod("Century of Winter", false);
    // var d = new CardPeriod("Heroes of the Seven Kings", true);
    // var e = new CardPeriod("Flourishing Kingdoms of Man", true);
    // var f = new CardPeriod("Death of the Gods", false);
    // this.table.setBookends(a,e);
    // this.table.addPeriod(f,1);
    // this.table.addPeriod(b,1);
    // this.table.addPeriod(c,2);
    // this.table.addPeriod(d,3);

    // var ba = new CardEvent("Dwarven King sells his people into slavery to Gods", false);
    // var bb = new CardEvent("Crow discovers the well of fate", false);
    // var bc = new CardEvent("Allfather creates Men to fight Colossai", true);
    // b.addEvent(ba,0);
    // b.addEvent(bb,1);
    // b.addEvent(bc,2);

    // var ca = new CardEvent("Dark Elves cast out, wander in Winter", false);
    // var cb = new CardEvent("Dwarves teach Dark Elves, defying Gods", true);
    // c.addEvent(ca,0);
    // c.addEvent(cb,1);

    // var ea = new CardEvent("Goorash saves Svetka from Black Beast", true);
    // var eb = new CardEvent("Marriage of Svetka interrupted", false);
    // var ec = new CardEvent("Goorash wins storm of swords", true);
    // var ed = new CardEvent("Svetka mourns death of Goorash", false);
    // e.addEvent(ea,0);
    // e.addEvent(eb,1);
    // e.addEvent(ec,2);

    // var fa = new CardEvent("Dwarven outcasts visits Well of Fate", false);
    // var fb = new CardEvent("Allfather hides last flame, reveals plans to crow", true);
    // f.addEvent(fa,0);
    // f.addEvent(fb,1);

    // var baa = new CardScene("What?", "answer 1", true);
    // ba.addScene(baa,0);

    // var bca = new CardScene("How?", "answer 2", false);
    // var bcb = new CardScene("Who?", "answer 3", true);
    // bc.addScene(bca,0);
    // bc.addScene(bcb,1);

    // var eba = new CardScene("When?", "answer 4", false);
    // var ebb = new CardScene("Why?", "answer 5", true);
    // eb.addScene(eba,0);
    // eb.addScene(ebb,1);

    // var faa = new CardScene("When?", "answer 6", false);
    // var fab = new CardScene("Where?", "answer 7", true);
    // fa.addScene(faa,0);
    // fa.addScene(fab,1);

    // var fba = new CardScene("What?", "answer 8", false);
    // fb.addScene(fba,0);

    // var p1 = new Player("Addie");
    // var p2 = new Player("Bors");
    // var p3 = new Player("Cat");
    // this.table.addPlayer(p1);
    // this.table.addPlayer(p2);
    // this.table.addPlayer(p3);

    // var f1 = new CardLegacy("Storm of Swords", p1);
    // var f2 = new CardLegacy("The Last Flame", p2);
    // var f3 = new CardLegacy("Dwarves Enslaved", p3);
    // this.table.addLegacy(f1);
    // this.table.addLegacy(f2);
    // this.table.addLegacy(f3);

    // this.table.palette.addToYes('Gods can be killed');
    // this.table.palette.addToYes('All Worlds physically connected');
    // this.table.palette.addToYes('Intelligent swords');
    // this.table.palette.addToNo('Raising the dead');
    // this.table.palette.addToNo('Mortal Wizards');

    // this.table.focai.addToFocus('Romance of Goorash and Svetka');
    // this.table.focai.addToFocus('Well of Fate');
    // this.table.focai.addToFocus('Dark Elves');
  }
}

import { Component } from '@angular/core';
import { Player } from './player';
import { CardTable } from './cardTable';
import { CardLegacy } from './cardLegacy';
import { CardPeriod } from './cardPeriod';
import { CardEvent } from './cardEvent';
import { CardScene } from './cardScene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  table: CardTable;

  ngOnInit() {
    this.table = CardTable.getSingleton();
    this.testData();
  }

  testData(): void {
    // var a = new CardPeriod("Allfather creates mortal world");
    // var b = new CardPeriod("Gods war against the Colossai");
    // var c = new CardPeriod("Century of Winter");
    // var d = new CardPeriod("Heroes of the Seven Kings");
    // var e = new CardPeriod("Flourishing Kingdoms of Man");
    // var f = new CardPeriod("Death of the Gods");
    // this.table.addPeriod(a,0);
    // this.table.addPeriod(f,1);
    // this.table.addPeriod(b,1);
    // this.table.addPeriod(c,2);
    // this.table.addPeriod(d,3);
    // this.table.addPeriod(e,4);

    // var ba = new CardEvent("Dwarven King sells his people into slavery to Gods");
    // var bb = new CardEvent("Crow discovers the well of fate");
    // var bc = new CardEvent("Allfather creates Men to fight Colossai");
    // b.addEvent(ba,0);
    // b.addEvent(bb,1);
    // b.addEvent(bc,2);

    // var ca = new CardEvent("Dark Elves cast out, wander in Winter");
    // var cb = new CardEvent("Dwarves teach Dark Elves, defying Gods");
    // c.addEvent(ca,0);
    // c.addEvent(cb,1);

    // var ea = new CardEvent("Goorash saves Svetka from Black Beast");
    // var eb = new CardEvent("Marriage of Svetka interrupted");
    // var ec = new CardEvent("Goorash wins storm of swords");
    // e.addEvent(ea,0);
    // e.addEvent(eb,1);
    // e.addEvent(ec,2);

    // var fa = new CardEvent("Dwarven outcasts visits Well of Fate");
    // var fb = new CardEvent("Allfather hides last flame, reveals plans to crow");
    // f.addEvent(fa,0);
    // f.addEvent(fb,1);

    // var baa = new CardScene("What?", "answer 1");
    // ba.addScene(baa,0);

    // var bca = new CardScene("How?", "answer 2");
    // var bcb = new CardScene("Who?", "answer 3");
    // bc.addScene(bca,0);
    // bc.addScene(bcb,1);

    // var eba = new CardScene("When?", "answer 4");
    // var ebb = new CardScene("Why?", "answer 5");
    // eb.addScene(eba,0);
    // eb.addScene(ebb,1);

    // var faa = new CardScene("When?", "answer 6");
    // var fab = new CardScene("Where?", "answer 7");
    // fa.addScene(faa,0);
    // fa.addScene(fab,1);

    // var fba = new CardScene("What?", "answer 8");
    // fb.addScene(fba,0);

    // var p1 = new Player("Addie");
    // var p2 = new Player("Bors");
    // var p3 = new Player("Cat");

    // var f1 = new CardLegacy("Storm of Swords", p1);
    // var f2 = new CardLegacy("The Last Flame", p2);
    // var f3 = new CardLegacy("Dwarves Enslaved", p3);
    // this.table.addLegacy(f1);
    // this.table.addLegacy(f2);
    // this.table.addLegacy(f3);

    // this.table.palette.addToYes('yes1');
    // this.table.palette.addToYes('yes2');
    // this.table.palette.addToNo('no1');
  }
}

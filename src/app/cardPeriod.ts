import { CardEvent } from './cardEvent';

export class CardPeriod {
  id: number;
  title: string;
  events: CardEvent[];

  constructor(title: string) {
    this.title = title;
    this.events = [];
  }

  addEvent(newEvent: CardEvent, insertAt: number): boolean {
    this.events.splice(insertAt, 0, newEvent);
    return true;
  }
}

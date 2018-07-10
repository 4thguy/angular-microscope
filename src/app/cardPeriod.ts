import { CardEvent } from './cardEvent';

export class CardPeriod {
  id: number;
  title: string;
  light: boolean;
  events: CardEvent[];

  constructor(title: string, light: boolean) {
    this.title = title;
    this.light = light;
    this.events = [];
  }

  addEvent(newEvent: CardEvent, insertAt: number): boolean {
    this.events.splice(insertAt, 0, newEvent);
    return true;
  }
}

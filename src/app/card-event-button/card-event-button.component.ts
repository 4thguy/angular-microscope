import { Component, OnInit, Input } from '@angular/core';

import { CardEvent } from '../cardEvent';

@Component({
  selector: 'app-card-event-button',
  templateUrl: './card-event-button.component.html',
  styleUrls: ['./card-event-button.component.css']
})
export class CardEventButtonComponent implements OnInit {
  @Input() event: CardEvent;
  @Input() canShowAddButton: boolean;

  constructor() { }

  ngOnInit() {
  }

}

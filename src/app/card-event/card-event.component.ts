import { Component, OnInit, Input } from '@angular/core';

import { CardEvent } from '../cardEvent';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent implements OnInit {
  @Input() event: CardEvent;
  @Input() canShowAddButton: boolean;

  constructor() { }

  ngOnInit() {
  }

}

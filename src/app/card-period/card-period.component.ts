import { Component, OnInit, Input } from '@angular/core';

import { CardPeriod } from '../cardPeriod';

@Component({
  selector: 'app-card-period',
  templateUrl: './card-period.component.html',
  styleUrls: ['./card-period.component.css']
})
export class CardPeriodComponent implements OnInit {
  @Input() period: CardPeriod;
  @Input() canShowAddButton: boolean;

  constructor() { }

  ngOnInit() {
  }

}

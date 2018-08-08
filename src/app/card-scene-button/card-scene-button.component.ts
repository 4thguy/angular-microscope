import { Component, OnInit, Input } from '@angular/core';

import { CardScene } from '../cardScene';

@Component({
  selector: 'app-card-scene-button',
  templateUrl: './card-scene-button.component.html',
  styleUrls: ['./card-scene-button.component.css']
})
export class CardSceneButtonComponent implements OnInit {
  @Input() scene: CardScene;
  @Input() canShowAddSceneButton: boolean;

  constructor() { }

  ngOnInit() {
  }

}

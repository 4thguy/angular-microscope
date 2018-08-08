import { Component, OnInit, Input } from '@angular/core';

import { CardScene } from '../cardScene';

@Component({
  selector: 'app-card-scene',
  templateUrl: './card-scene.component.html',
  styleUrls: ['./card-scene.component.css']
})
export class CardSceneComponent implements OnInit {
  @Input() scene: CardScene;

  constructor() { }

  ngOnInit() {
  }

}

import { CardScene } from './cardScene';

export class CardEvent {
  id: number;
  title: string;
  scenes: CardScene[];

  constructor(title: string) {
    this.title = title;
    this.scenes = [];
  }

  addScene(newScene: CardScene, insertAt: number): boolean {
    if (
      (insertAt > 0) && (insertAt < this.scenes.length - 1) ||
      (this.scenes.length < 2)
    ) {
        this.scenes.splice(insertAt, 0, newScene);
        return true;
      }
    return false;
  }
}
import { CardScene } from './cardScene';

export class CardEvent {
  id: number;
  title: string;
  light: boolean;
  scenes: CardScene[];

  constructor(title: string, light: boolean) {
    this.title = title;
    this.light = light;
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
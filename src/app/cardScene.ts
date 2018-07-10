export class CardScene {
  id: number;
  title: string;
  answer: string;
  light: boolean;

  constructor(title: string, answer: string, light: boolean) {
    this.title = title;
    this.answer = answer;
    this.light = light;
  }
}

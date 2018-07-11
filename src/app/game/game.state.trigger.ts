import { GameState } from './game.state';

export class GameStateTrigger {

  static triggerNewRound(gameState:GameState): GameState {
    return GameState.SelectLens;
  }

  static triggerNext(gameState: GameState): GameState {
    switch (gameState) {
      case GameState.Start:
        return GameState.SelectLens;
      case GameState.SelectLens:
        return GameState.DeclareFocus;
      case GameState.DeclareFocus:
        return GameState.AddPeriodEventScene;
      case GameState.AddPeriodEventScene:
        return GameState.SubmitPeriodEventScene;
      case GameState.SubmitPeriodEventScene:
        return GameState.ChooseLegacy;
      case GameState.ChooseLegacy:
        return GameState.ExploreLegacy;
      case GameState.ExploreLegacy:
        return GameState.SubmitLegacy;
       case GameState.SubmitLegacy:
        return GameState.Talk;
      case GameState.Talk:
        return GameState.Finish;
      case GameState.Finish:
        return GameState.Start;
        break;
    }
  }

  static triggerRollback(gameState: GameState): GameState {
    switch (gameState) {
      case GameState.Finish:
        return GameState.Talk;
      case GameState.Talk:
        return GameState.SubmitLegacy;
       case GameState.SubmitLegacy:
        return GameState.ExploreLegacy;
      case GameState.ExploreLegacy:
        return GameState.ChooseLegacy;
      case GameState.ChooseLegacy:
        return GameState.SubmitPeriodEventScene;
      case GameState.SubmitPeriodEventScene:
        return GameState.AddPeriodEventScene;
      case GameState.AddPeriodEventScene:
        return GameState.DeclareFocus;
      case GameState.DeclareFocus:
        return GameState.SelectLens;
      case GameState.SelectLens:
        return GameState.Start;
      case GameState.Start:
        return GameState.Finish;
    }
  }

  static currentStateString(gameState: GameState): string {
    switch (gameState) {
      case GameState.Start:
        return "Start";
      case GameState.SelectLens:
        return "Select Lens";
      case GameState.DeclareFocus:
        return "Declare Focus";
      case GameState.AddPeriodEventScene:
        return "Add Period / Event / Scene";
      case GameState.SubmitPeriodEventScene:
        return "Submit Period / Event / Scene";
      case GameState.ChooseLegacy:
        return "Select Legacy";
      case GameState.ExploreLegacy:
        return "Explore Legacy";
      case GameState.SubmitLegacy:
        return "Submit Period / Event / Scene";
      case GameState.Talk:
        return "Talk";
      case GameState.Finish:
        return "Finished";

      default:
        // code...
        break;
    }
  }
}

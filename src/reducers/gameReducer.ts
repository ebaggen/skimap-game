import IGameState, { initialGameState } from "../types/gameState";
import { GameActionType, GameActions } from "../actions/gameActions";
import { Guess } from "../types/guess";
import IResult from "../types/result";
import currentResortSelector from "../selectors/currentResortSelector";
import { filterResorts } from "../utility/resortParameters";
import ResortParameter from "../enums/resortParameter";
import ResortParameterAction from "../enums/resortParameterAction";

const gameReducer = (state: IGameState, action: GameActions): IGameState => {
  switch (action.type) {
    case GameActionType.SubmitGuess:
      let isCorrect: boolean;
      if (state.guess.selection != null) {
        isCorrect =
          state.guess.selection.id === currentResortSelector(state).id;
      } else {
        isCorrect = false;
      }
      const submittedGuess: Guess = {
        ...state.guess,
        isCorrect: isCorrect,
        showResult: true,
      };
      return {
        ...state,
        guess: submittedGuess,
      };
    case GameActionType.UpdateGuess:
      const updatedGuess: Guess = {
        ...state.guess,
        selection: action.payload.selection,
        input: action.payload.input,
      };
      return {
        ...state,
        guess: updatedGuess,
      };
    case GameActionType.RestartGame:
      return {
        ...initialGameState,
        resorts: filterResorts(state.configuredParameters).shuffle(),
      };
    case GameActionType.MoveNext:
      const isGameOver = state.turnIndex >= state.resorts.length - 1;
      const nextTurnIndex = isGameOver ? state.turnIndex : state.turnIndex + 1;
      const newResult: IResult = {
        isCorrect: state.guess.isCorrect,
        guess: state.guess.selection,
        actual: state.resorts[state.turnIndex],
      };
      const editedHistory = [...state.history, newResult];
      return {
        ...state,
        turnIndex: nextTurnIndex,
        guess: new Guess(null, ""),
        history: editedHistory,
        showResultsPopup: isGameOver,
      };
    case GameActionType.UpdateResortParameter:
      const reduceParameterAction = (
        parameterSet: Set<string>
      ): Set<string> => {
        let editedSet = parameterSet;

        switch (action.payload.action) {
          case ResortParameterAction.Add:
            editedSet.add(action.payload.value);
            break;
          case ResortParameterAction.Remove:
            editedSet.delete(action.payload.value);
            break;
        }
        return editedSet;
      };

      let editedParameters = state.configuredParameters;

      switch (action.payload.parameterType) {
        case ResortParameter.Country:
          editedParameters = {
            ...editedParameters,
            countries: reduceParameterAction(
              state.configuredParameters.countries
            ),
          };
          break;
        case ResortParameter.Region:
          editedParameters = {
            ...editedParameters,
            regions: reduceParameterAction(state.configuredParameters.regions),
          };
          break;
        case ResortParameter.Location:
          editedParameters = {
            ...editedParameters,
            locations: reduceParameterAction(
              state.configuredParameters.locations
            ),
          };
          break;
        default:
          editedParameters = state.configuredParameters;
      }
      return {
        ...state,
        configuredParameters: editedParameters,
      };
    case GameActionType.ShowParameterPopup:
      return {
        ...state,
        showParameterPopup: action.payload.show,
      };
    default:
      return state;
  }
};

export default gameReducer;

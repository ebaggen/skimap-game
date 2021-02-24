import IGameState, { initialGameState } from './types/gameState';
import { GameActionType, GameActions } from './actions';
import { Guess } from './types/guess';
import IResult from './types/result';
import { currentResortSelector } from './selectors';
import { resorts } from './util';

const gameReducer = (state: IGameState, action: GameActions): IGameState => {
    switch (action.type) {
        case GameActionType.SubmitGuess:
            let isCorrect: boolean;
            if (state.guess.selection != null)
            {
                isCorrect = state.guess.selection.id === currentResortSelector(state).id;
            } else {
                isCorrect = false;
            }
            const submittedGuess: Guess = {
                ...state.guess,
                isCorrect: isCorrect,
                showResult: true
            }
            return {
                ...state,
                guess: submittedGuess
            };
        case GameActionType.UpdateGuess:
            const updatedGuess: Guess = {
                ...state.guess,
                selection: action.payload.selection,
                input: action.payload.input
            };
            return {
                ...state,
                guess: updatedGuess
            }
        case GameActionType.RestartGame:
            return {
                ...initialGameState,
                resorts: resorts.shuffle()
            };
        case GameActionType.MoveNext:
            const isGameOver = state.turnIndex >= state.resorts.length - 1;
            const nextTurnIndex = isGameOver ? state.turnIndex : state.turnIndex + 1;
            const newResult: IResult = {
                isCorrect: state.guess.isCorrect,
                guess: state.guess.selection,
                actual: state.resorts[state.turnIndex]
            }
            const editedHistory = [
                ...state.history,
                newResult
            ]
            return {
                ...state,
                turnIndex: nextTurnIndex,
                guess: new Guess(null, ''),
                history: editedHistory,
                showResultsPopup: isGameOver
            };
        default:
            return state;
    }
}

export default gameReducer;
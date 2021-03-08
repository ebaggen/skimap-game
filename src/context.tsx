import React, { Dispatch, createContext, useReducer } from "react";
import useDelayedEffect from "./hooks/useDelayedEffect";
import { GameActions, MoveNext } from "./actions/gameActions";
import gameReducer from "./reducers/gameReducer";
import combineReducers from "./utility/combineReducers";
import IGameState, { initialGameState } from "./types/gameState";

interface IAppContext {
  state: IGameState;
  dispatch: React.Dispatch<GameActions>;
}

const context = createContext<IAppContext>({
  state: initialGameState,
  dispatch: () => null,
});

const { Provider } = context;

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch]: [IGameState, Dispatch<GameActions>] = useReducer(
    combineReducers(gameReducer),
    initialGameState
  );

  const onShowResultChanged = () => state.guess.showResult;

  useDelayedEffect<GameActions>(dispatch, MoveNext, 1000, onShowResultChanged, [
    state.guess.showResult,
  ]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { context, AppProvider };

import React, { createContext, useEffect, useReducer } from 'react';
import { useDelayedEffect } from './hooks';
import IGameState, { initialGameState } from './types/gameState';
import { GameActions, MoveNext } from './actions';
import gameReducer from './reducers';

interface IAppContext {
    state: IGameState;
    dispatch: React.Dispatch<GameActions>;
}

const context = createContext<IAppContext>({
    state: initialGameState,
    dispatch: () => null
});

const { Provider } = context;

const AppProvider = ({ children }: { children: JSX.Element}) => {
    const [state, dispatch] = useReducer(gameReducer, initialGameState);

    useDelayedEffect<GameActions>(state, dispatch, MoveNext, 2000, [state.guess.showResult]);

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    );
}

export { context, AppProvider };
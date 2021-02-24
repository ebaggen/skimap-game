import { useEffect } from 'react';
import IGameState from './types/gameState';

export const useDelayedEffect = <A>(
    state: IGameState,
    dispatch: React.Dispatch<A>,
    action: () => A,
    delay: number,
    dependencies?: React.DependencyList
) => {
    useEffect(() => {
        if (state.guess.showResult)
        {
            setTimeout(() =>
                dispatch(action()), delay);
        }
    }, dependencies);
};
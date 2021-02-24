import { useContext } from 'react';
import IGameState from './types/gameState';

export const currentResortSelector = (state: IGameState) => 
{
    return state.resorts[state.turnIndex];
}
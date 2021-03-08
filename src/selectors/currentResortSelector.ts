import { useContext } from "react";
import IGameState from "../types/gameState";

const currentResortSelector = (state: IGameState) => {
  return state.resorts[state.turnIndex];
};

export default currentResortSelector;

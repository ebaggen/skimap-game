import { GameActions } from "../actions/gameActions";

const combineReducers = (...reducers: Function[]) => (
  state: any,
  action: GameActions
): any => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

export default combineReducers;

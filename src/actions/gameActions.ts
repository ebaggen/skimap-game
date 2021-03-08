import IResort from "../types/resort";
import ResortParameter from "../enums/resortParameter";
import ResortParameterAction from "../enums/resortParameterAction";

export enum GameActionType {
  SubmitGuess = "guess/submit",
  UpdateGuess = "guess/update",
  MoveNext = "game/next",
  RestartGame = "game/restart",
  ChangeTheme = "app/theme",
  UpdateResortParameter = "app/parameters",
  ShowParameterPopup = "app/parameters/showPopup",
}

interface ISubmitGuess {
  type: GameActionType.SubmitGuess;
}

interface IUpdateGuess {
  type: GameActionType.UpdateGuess;
  payload: {
    selection: IResort | null;
    input: string;
  };
}

interface IMoveNext {
  type: GameActionType.MoveNext;
}

interface IRestartGame {
  type: GameActionType.RestartGame;
}

interface IChangeTheme {
  type: GameActionType.ChangeTheme;
  payload: {
    useDarkTheme: boolean;
  };
}

interface IUpdateResortParameter {
  type: GameActionType.UpdateResortParameter;
  payload: {
    parameterType: ResortParameter;
    value: string;
    action: ResortParameterAction;
  };
}

interface IShowParameterPopup {
  type: GameActionType.ShowParameterPopup;
  payload: {
    show: boolean;
  };
}

export type GameActions =
  | ISubmitGuess
  | IUpdateGuess
  | IMoveNext
  | IRestartGame
  | IChangeTheme
  | IUpdateResortParameter
  | IShowParameterPopup;

export const SubmitGuess = (): ISubmitGuess => ({
  type: GameActionType.SubmitGuess,
});

export const UpdateGuess = (
  selection: IResort | null,
  input: string
): IUpdateGuess => ({
  type: GameActionType.UpdateGuess,
  payload: { selection, input },
});

export const MoveNext = (): IMoveNext => ({
  type: GameActionType.MoveNext,
});

export const RestartGame = (): IRestartGame => ({
  type: GameActionType.RestartGame,
});

export const ChangeTheme = (useDarkTheme: boolean): IChangeTheme => ({
  type: GameActionType.ChangeTheme,
  payload: { useDarkTheme },
});

export const UpdateResortParameter = (
  parameterType: ResortParameter,
  value: string,
  action: ResortParameterAction
): IUpdateResortParameter => ({
  type: GameActionType.UpdateResortParameter,
  payload: {
    parameterType,
    value,
    action,
  },
});

export const ShowParameterPopup = (show: boolean): IShowParameterPopup => ({
  type: GameActionType.ShowParameterPopup,
  payload: {
    show,
  },
});

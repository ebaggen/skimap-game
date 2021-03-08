import resorts from "../constants/resorts";
import IGuess, { Guess } from "./guess";
import IResort from "./resort";
import IResult from "./result";
import "../extentions/array";
import { Theme } from "@material-ui/core";
import { lightTheme } from "../theme";
import { getAllResortParameters } from "../utility/resortParameters";
import ResortParameter from "../enums/resortParameter";
import IResortParameterCollection from "../types/resortParameterCollection";

export default interface IGameState {
  resorts: IResort[];
  history: IResult[];
  guess: IGuess;
  turnIndex: number;
  showResultsPopup: boolean;
  theme: Theme;
  configuredParameters: IResortParameterCollection;
  showParameterPopup: boolean;
}

export const initialGameState: IGameState = {
  resorts: resorts.shuffle(),
  history: [],
  guess: new Guess(null, ""),
  turnIndex: 0,
  showResultsPopup: false,
  theme: lightTheme,
  configuredParameters: getAllResortParameters(),
  showParameterPopup: false,
};

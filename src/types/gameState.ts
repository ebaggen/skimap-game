import { resorts } from "../util";
import IGuess, { Guess } from "./guess";
import IResort from "./resort";
import IResult from "./result";
import './../extensions';

export default interface IGameState {
    resorts: IResort[];
    history: IResult[];
    guess: IGuess;
    turnIndex: number;
    showResultsPopup: boolean;
}

export const initialGameState: IGameState = {
    resorts: resorts.shuffle(),
    history: [],
    guess: new Guess(null, ''),
    turnIndex: 0,
    showResultsPopup: false
}
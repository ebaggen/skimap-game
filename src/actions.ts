import IResort from "./types/resort";

export enum GameActionType {
    SubmitGuess = "guess/submit",
    UpdateGuess = "guess/update",
    MoveNext = "game/next",
    RestartGame = "game/restart"
}

interface ISubmitGuess {
    type: GameActionType.SubmitGuess;
}

interface IUpdateGuess {
    type: GameActionType.UpdateGuess;
    payload: {
        selection: IResort | null,
        input: string
    }
}

interface IMoveNext {
    type: GameActionType.MoveNext;
}

interface IRestartGame {
    type: GameActionType.RestartGame;
}

export type GameActions =
    | ISubmitGuess
    | IUpdateGuess
    | IMoveNext
    | IRestartGame;

export const SubmitGuess = (): ISubmitGuess => ({
    type: GameActionType.SubmitGuess
});

export const UpdateGuess = (selection: IResort | null, input: string): IUpdateGuess => ({
    type: GameActionType.UpdateGuess,
    payload: {selection, input}
});

export const MoveNext = (): IMoveNext => ({
    type: GameActionType.MoveNext
})

export const RestartGame = (): IRestartGame => ({
    type: GameActionType.RestartGame
});
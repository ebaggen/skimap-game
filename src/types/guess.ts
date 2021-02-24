import IResort from './resort';

interface IGuess {
    selection: IResort | null;
    input: string;
    isCorrect: boolean;
    showResult: boolean;
}

export class Guess implements IGuess {
    
    selection: IResort | null;
    input: string;
    isCorrect: boolean;
    showResult: boolean;

    constructor(selection: IResort | null, input: string) {
        this.selection = selection;
        this.input = input;
        this.isCorrect = false;
        this.showResult = false;
    }
}

export default IGuess;
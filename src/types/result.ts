import IResort from './resort';

interface IResult {
    isCorrect: boolean,
    guess: IResort | null,
    actual: IResort
}

export default IResult;
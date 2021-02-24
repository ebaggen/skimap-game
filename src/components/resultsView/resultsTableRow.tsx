import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { green, red } from '@material-ui/core/colors';
import IResult from '../../types/result';

type Props = {
    result: IResult
}

const ResultsTableRow = ({ result }: Props) => {
    const correctIcon = <CheckIcon style={{ color: green[400]}}/>;
    const incorrectIcon = <ClearIcon style={{ color: red[400] }}/>;

    return (
        <tr>
            <td>
                {result.isCorrect ? correctIcon : incorrectIcon}
            </td>
            <td>{result.actual.name}</td>
            <td>{result.guess ? result.guess.name : ''}</td>
        </tr>
    );
}

export default ResultsTableRow;
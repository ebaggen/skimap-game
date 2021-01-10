import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { green, red } from '@material-ui/core/colors';

const ResultsTableRow = (props) => {
    const correctIcon = <CheckIcon style={{ color: green[400]}}/>;
    const incorrectIcon = <ClearIcon style={{ color: red[400] }}/>;

    return (
        <tr>
            <td>
                {props.result.isCorrect ? correctIcon : incorrectIcon}
            </td>
            <td>{props.result.actual}</td>
            <td>{props.result.guessed}</td>
        </tr>
    );
}

export default ResultsTableRow;
import React from 'react';

const ResultsTableRow = (props) => {
    return (
        <tr>
            <td>{props.actual}</td>
            <td>{props.guessed}</td>
        </tr>
    );
}

export default ResultsTableRow;
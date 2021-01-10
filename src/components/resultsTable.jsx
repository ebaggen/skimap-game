import React from 'react';
import { Table } from 'react-bootstrap';
import ResultsTableRow from './resultsTableRow';

const resultsTable = (props) => {

    return (
        <Table>
            <thead>
                <th>Actual Resort</th>
                <th>Your Guess</th>
            </thead>
            <tbody>
                {props.results.map(result => {
                    return (
                        <ResultsTableRow actual={result.actual} guessed={result.guessed} />
                    );
                })}
            </tbody>
        </Table>
        
    );
};

export default resultsTable;
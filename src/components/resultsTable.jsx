import React from 'react';
import { Table } from 'react-bootstrap';
import ResultsTableRow from './resultsTableRow';

const resultsTable = (props) => {

    return (
        <Table>
            <thead>
                <th/>
                <th>Actual Resort</th>
                <th>Your Guess</th>
            </thead>
            <tbody>
                {props.results.map(result => {
                    return (
                        <ResultsTableRow result={result} />
                    );
                })}
            </tbody>
        </Table>
        
    );
};

export default resultsTable;
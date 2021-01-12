import React from 'react';
import { Table } from 'react-bootstrap';
import ResultsTableRow from './resultsTableRow';
import Result from '../../types/result';

type Props = {
    results: Result[]
}

const resultsTable = ({ results }: Props) => {

    return (
        <Table>
            <thead>
                <th/>
                <th>Actual Resort</th>
                <th>Your Guess</th>
            </thead>
            <tbody>
                {results.map(result => {
                    return (
                        <ResultsTableRow result={result} />
                    );
                })}
            </tbody>
        </Table>
        
    );
};

export default resultsTable;
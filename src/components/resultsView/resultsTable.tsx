import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import ResultsTableRow from './resultsTableRow';
import { context } from '../../context';

const resultsTable = () => {
    const { state } = useContext(context);

    return (
        <Table>
            <thead>
                <th/>
                <th>Actual Resort</th>
                <th>Your Guess</th>
            </thead>
            <tbody>
                {state.history.map(result => {
                    return (
                        <ResultsTableRow result={result} />
                    );
                })}
            </tbody>
        </Table>
        
    );
};

export default resultsTable;
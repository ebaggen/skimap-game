import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ResultsTableRow from "./resultsTableRow";
import { context } from "../../context";

const resultsTable = () => {
  const { state } = useContext(context);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Resort</TableCell>
            <TableCell>Your Guess</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.history.map((result) => {
            return <ResultsTableRow result={result} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default resultsTable;

import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { green, red } from "@material-ui/core/colors";
import IResult from "../../types/result";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

type Props = {
  result: IResult;
};

const ResultsTableRow = ({ result }: Props) => {
  const correctIcon = <CheckIcon style={{ color: green[400] }} />;
  const incorrectIcon = <ClearIcon style={{ color: red[400] }} />;

  return (
    <TableRow>
      <TableCell>{result.isCorrect ? correctIcon : incorrectIcon}</TableCell>
      <TableCell>{result.actual.name}</TableCell>
      <TableCell>{result.guess ? result.guess.name : ""}</TableCell>
    </TableRow>
  );
};

export default ResultsTableRow;

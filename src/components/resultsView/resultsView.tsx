import React, { useContext } from "react";
import ResultsTable from "./resultsTable";
import { context } from "../../context";
import { RestartGame } from "../../actions/gameActions";

import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const ResultsViewPopup = () => {
  const { state, dispatch } = useContext(context);

  const totalCorrect = state.history.filter((result) => result.isCorrect)
    .length;

  const handleRestart = () => dispatch(RestartGame());

  return (
    <Dialog
      open={state.showResultsPopup}
      fullWidth
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        You got {totalCorrect} of {state.history.length} in 
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <ResultsTable />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRestart} color="primary">
          Play Again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResultsViewPopup;

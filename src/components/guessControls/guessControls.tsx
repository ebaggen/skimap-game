import React, { useContext } from "react";
import TextEntry from "./textEntry";
import MobileTextEntry from "./mobileTextEntry";
import HintPopover from "./hintPopover";
import { Button, ButtonGroup, Grid, Box } from "@material-ui/core";
import { SubmitGuess } from "../../actions/gameActions";
import { isMobileDevice } from "responsive-react";
import { context } from "../../context";

const GuessControls = () => {
  const { state, dispatch } = useContext(context);

  return (
    <Box width="70vw" padding="10px">
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={12}>
          {isMobileDevice() ? <MobileTextEntry /> : <TextEntry />}
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            onClick={() => dispatch(SubmitGuess())}
            disabled={state.guess.selection === null || state.guess.showResult}
          >
            Submit
          </Button>
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            onClick={() => dispatch(SubmitGuess())}
            disabled={state.guess.showResult}
          >
            Give up
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GuessControls;

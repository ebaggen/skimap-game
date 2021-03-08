import React, { useContext } from "react";
import "../App.css";
import { Box, Button, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ResultsView from "./resultsView/resultsView";
import GuessControls from "./guessControls/guessControls";
import ResultToast from "./popups/resultToast";
import { context } from "../context";
import currentResortSelector from "../selectors/currentResortSelector";
import ResortParameter from "../enums/resortParameter";
import { ShowParameterPopup } from "../actions/gameActions";
//import ResortParameterPopup from "./popups/resortParametersPopup";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: "20px",
    fontSize: "1.5rem",
  },
  imageContainer: {
    height: "60%",
    padding: "0px 10px",
    display: "flex",
  },
  image: {
    margin: "auto",
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  controls: {
    margin: "20px",
  },
  footer: {
    margin: "20px",
  },
}));

const Game = () => {
  const { state, dispatch } = useContext(context);

  const classes = useStyles();

  const currentResort = currentResortSelector(state);

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <ResultsView />
      <ResultToast />

      <Typography className={classes.header} variant="h1">
        Name that Niehues
      </Typography>
      {currentResort && (
        <>
          <Box flexGrow={1} className={classes.imageContainer}>
            <img
              className={classes.image}
              src={currentResort.img}
              alt={`Cannot find ${currentResort.name}.`}
            />
          </Box>
          <Box className={classes.controls}>
            <GuessControls />
          </Box>
        </>
      )}
      <Typography variant="caption">
        All artwork beautifully painted by{" "}
        <a
          href="https://jamesniehues.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          James Niehues
        </a>
        .
      </Typography>
    </Box>
  );
};

export default Game;

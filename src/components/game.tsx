import React, { useContext } from "react";
import "../App.css";
import { Box, Card, CardMedia, makeStyles } from "@material-ui/core";
import { shadows } from "@material-ui/system";
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
  image: {
    margin: "auto",
    objectFit: "contain",
    maxWidth: "90%",
    height: "65vh",
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
          <Box flexGrow={1}>
            <CardMedia
              className={classes.image}
              component="img"
              image={currentResort.img}
              alt={`Could not locate image for ${currentResort.name}`}
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

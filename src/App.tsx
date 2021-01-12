import React from 'react';

import './App.css';
import { generateMapIndicies, resorts, nullResort, sleep } from './util';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Resort from './types/resort';
import Result from './types/result';
import ResultsView from './components/resultsView/resultsView';
import GuessControls from './components/guessControls/guessControls';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
  },
  title: {
    height: '5vh',
    variant: 'h1'
  },
  body: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footer: {
    height: '5hv',
    margin: '10px'
  },
  image: {
    height: '70vh',
    //borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    margin: 'auto',
    objectFit: 'contain',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alightItems: 'center',
    //borderStyle: 'solid',
  }
}));

const App = () => {

  const [mapIndicies, setMapIndicies] = useState(generateMapIndicies);
  const [gameIndex, setGameIndex] = useState(0);
  const [currentResort, setCurrentResort] = useState<Resort>(nullResort);
  const [showGameOverPopup, setShowGameOverPopup] = useState<boolean>(false);
  const [isGuessCorrect, setIsGuessCorrect] = useState<boolean | undefined>(undefined);
  const [results, setResults] = useState<Result[]>([]);
  const [selection, setSelection] = useState<string>('');

  const restartGame = () => {
    setMapIndicies(generateMapIndicies());
    setGameIndex(0);
    setCurrentResort(nullResort);
    setShowGameOverPopup(false);
    setIsGuessCorrect(undefined);
    setResults([]);
    setSelection('');
  };

  

  const guess = async function(guess: string) {
    
    let isCorrect = false;
    if (guess.length)
    {
      if (guess.toLowerCase() ===  currentResort.name.toLowerCase()) {
        isCorrect = true;
      }
    } else {
      guess = '';
    }
    
    // If not correct, set the selection to the correct answer for the user
    if (!isCorrect) {
      setSelection(currentResort.name);
    }

    setIsGuessCorrect(isCorrect);
    
    await sleep(1000);

    setResults([...results, {isCorrect: isCorrect, actual: currentResort, guess: guess}])
    setSelection('');
    setIsGuessCorrect(undefined);
    setGameIndex(gameIndex + 1);
  };

  useEffect(() => {
    setCurrentResort(resorts[mapIndicies[gameIndex]]);
  });

  useEffect(() => {
    // Check if game is over
    if (results.length >= resorts.length) {
      setShowGameOverPopup(true);
    }
  });

  const classes = useStyles();

  return (
    <Grid container justify="space-between" alignItems="center" className={classes.root}>
      <ResultsView
        show={showGameOverPopup}
        onHide={restartGame}
        results={results}
      />
      <Typography className={classes.title}>
        Name that Niehues
      </Typography>
      <body className={classes.body}>
        {currentResort &&
          <>
            <div className={classes.image}>
              <img
                className={classes.img}
                src={currentResort.img}
                alt={`Cannot find ${currentResort.name}.`}
              />
            </div>
            <div className={classes.controls}> 
              <GuessControls
                resort={currentResort}
                selection={selection}
                isGuessCorrect={isGuessCorrect}
                onSubmit={(g) => guess(g)}
                onSelectionChange={setSelection}
              />
            </div>
            <label>
                {results.length + 1} / {resorts.length}
              </label>
          </>
        }
      </body>
      <footer className={classes.footer}>
        All artwork beautifully painted by <a href="https://jamesniehues.com" target="_blank" rel="noopener noreferrer">James Niehues</a>.
      </footer>
    </Grid>
  );
}

export default App;
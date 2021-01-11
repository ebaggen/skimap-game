import React from 'react';

import './App.css';
import { generateMapIndicies, resorts, sleep, nullResort } from './util';
import { useState, useEffect } from 'react';
import { ResultsView, GuessControls } from './components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

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
    height: '80vh',
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

export default function App(){

  const [mapIndicies, setMapIndicies] = useState(generateMapIndicies);
  const [totalCorrectGuesses, setTotalCorrectGuesses] = useState(0);
  const [gameIndex, setGameIndex] = useState(0);
  const [currentResort, setCurrentResort] = useState(nullResort);
  const [showGameOverPopup, setShowGameOverPopup] = useState(false);
  const [isGuessCorrect, setIsGuessCorrect] = useState(undefined);
  const [results, setResults] = useState([]);
  const [selection, setSelection] = useState(null);

  const restartGame = () => {
    setMapIndicies(generateMapIndicies());
    setTotalCorrectGuesses(0);
    setGameIndex(0);
    setCurrentResort(nullResort);
    setShowGameOverPopup(false);
    setIsGuessCorrect(undefined);
    setResults([]);
  };

  

  const guess = async function(guess) {
    
    let isCorrect = false;
    if (guess && guess.length)
    {
      if (guess.toLowerCase() ===  currentResort.name.toLowerCase()) {
        setTotalCorrectGuesses(totalCorrectGuesses + 1);
        setIsGuessCorrect(true);
        isCorrect = true;
      }
    } else {
      guess = '';
    }

    if (!isCorrect) {
      setSelection([currentResort.name]);
    }

    setIsGuessCorrect(isCorrect);
    setResults([...results, {isCorrect: isCorrect, actual: currentResort.name, guessed: guess}])
    
    await sleep(1000);
    setSelection([]);
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
        onHide={() => restartGame()}
        totalCorrect={totalCorrectGuesses}
        total={resorts.length}
        results={results}
      />
      <Typography className={classes.title}>
        Name that Niehues
      </Typography>
      <body className={classes.body}>
        {currentResort &&
          <>
            <div elevation={10} variant="outlines" className={classes.image}>
              <img
                className={classes.img}
                src={currentResort.img}
                alt={`Cannot find image for ${currentResort.name}`}
                flex
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
import React, { useContext } from 'react';

import '../App.css';
import { resorts } from '../util';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ResultsView from '../components/resultsView/resultsView';
import GuessControls from '../components/guessControls/guessControls';
import { context } from '../context';
import { currentResortSelector } from '../selectors';


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

const Game = () => {
    const { state } = useContext(context);

    const classes = useStyles();

    const currentResort = currentResortSelector(state);
    
    return (
        <Grid container justify="space-between" alignItems="center" className={classes.root}>
            <ResultsView />
            <Typography className={classes.title}>
                Name that Niehues
            </Typography>
            {currentResort &&
              <body className={classes.body}>
                <div className={classes.image}>
                    <img
                        className={classes.img}
                        src={currentResort.img}
                        alt={`Cannot find ${currentResort.name}.`}
                    />
                </div>
                <div className={classes.controls}> 
                    <GuessControls />
                </div>    
                <label>
                    {state.history.length + 1} / {resorts.length}
                </label>
              </body>
            }
            
            <footer className={classes.footer}>
                All artwork beautifully painted by <a href="https://jamesniehues.com" target="_blank" rel="noopener noreferrer">James Niehues</a>.
            </footer>
      </Grid>
    );
}

export default Game;
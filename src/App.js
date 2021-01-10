import React from 'react';

import './App.css';
import { generateMapIndicies, resorts, sleep, nullResort } from './util';
import { useState, useEffect } from 'react';
import { ResultsView, GuessControls } from './components';
import { Image } from 'react-bootstrap';

function App(){

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
    if (gameIndex >= resorts.length) {
      setShowGameOverPopup(true);
    }
  });


  return (
    <div className="App">
      <header className="App-header">
        <ResultsView
          show={showGameOverPopup}
          onHide={() => restartGame()}
          totalCorrect={totalCorrectGuesses}
          total={resorts.length}
          results={results}
        />
        Name that Niehues
      </header>
      <body>
        {currentResort &&
          <> 
          <Image
            className="App-body-image"
            src={currentResort.img}
            alt={`Cannot find image for ${currentResort.name}`}
            fluid
          />
            <GuessControls
              resort={currentResort}
              selection={selection}
              isGuessCorrect={isGuessCorrect}
              onSubmit={(g) => guess(g)}
              onSelectionChange={setSelection}
            />
            <label className="App-user-control">
              {results.length + 1} / {resorts.length}
            </label>
          </>
        }
      </body>
      <footer className="App-footer">
        All artwork beautifully painted by <a href="https://jamesniehues.com" target="_blank" rel="noopener noreferrer">James Niehues</a>.
      </footer>
    </div>
  );
}

export default App;

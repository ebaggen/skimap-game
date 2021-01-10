import React from 'react';

import './App.css';
import { generateMapIndicies, resorts, sleep } from './util';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form, FormGroup, InputGroup, Image, Row } from 'react-bootstrap';
import { ResultsView } from './components';

function App(){

  const [mapIndicies, setMapIndicies] = useState(generateMapIndicies);
  const [totalCorrectGuesses, setTotalCorrectGuesses] = useState(0);
  const [gameIndex, setGameIndex] = useState(0);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [currentResort, setCurrentResort] = useState(null);
  const [showGameOverPopup, setShowGameOverPopup] = useState(false);
  const [isGuessCorrect, setIsGuessCorrect] = useState(undefined);
  const [results, setResults] = useState([]);

  const restartGame = () => {
    setMapIndicies(generateMapIndicies());
    setTotalCorrectGuesses(0);
    setGameIndex(0);
    setCurrentGuess([]);
    setCurrentResort(null);
    setShowGameOverPopup(false);
    setIsGuessCorrect(undefined);
    setResults([]);
  };

  const guess = async function() {
    if (currentGuess.length)
    {
      if (currentGuess[0].toLowerCase() ===  currentResort.name.toLowerCase()) {
        setTotalCorrectGuesses(totalCorrectGuesses + 1);
        setIsGuessCorrect(true);
      } else {
        setIsGuessCorrect(false);
      }
      setResults([...results, {actual: currentResort.name, guessed: currentGuess}])
    } else {
      setResults([...results, {actual: currentResort.name, guessed: ''}])
      setIsGuessCorrect(false);
    }
    
    await sleep(1000);
    setIsGuessCorrect(undefined);
    setCurrentGuess([]);
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
        <Row>
          Name that Niehues
        </Row>
        <label>
          {totalCorrectGuesses} / {resorts.length}
        </label>
        <Row height="10px">
          {currentResort && 
            <Image className="App-image" src={currentResort.img}/>
          }
        </Row>
        <Form>
          <FormGroup>
            <InputGroup>
              <Typeahead
                onChange={setCurrentGuess}
                options={resorts.map(resort => resort.name)}
                selected={currentGuess}
                placeholder='Start typing a resort...'
                flip
                onKeyDown={e => {
                  if (e.key === 'Enter' && currentGuess.length) {
                    guess();
                  }
                }}
                isValid={isGuessCorrect === true}
                isInvalid={isGuessCorrect === false}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={guess} disabled={currentGuess.length === 0}>
                  Submit
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </FormGroup>
        </Form>
      </header>
      
      <footer>
        All artwork beautifully painted by <a href="https://jamesniehues.com" target="_blank" rel="noopener noreferrer">James Niehues</a>.
      </footer>
    </div>
  );
}

export default App;

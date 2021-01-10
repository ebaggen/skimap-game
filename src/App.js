import React from 'react';

import './App.css';
import { generateMapIndicies, resorts } from './util';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form, FormGroup, InputGroup, Image, Row } from 'react-bootstrap';

function App(){

  const [mapIndicies, setMapIndicies] = useState(generateMapIndicies);
  const [totalCorrectGuesses, setTotalCorrectGuesses] = useState(0);
  const [gameIndex, setGameIndex] = useState(0);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [currentResort, setCurrentResort] = useState(null);

  const resetState = () => {
    setMapIndicies(generateMapIndicies());
    setTotalCorrectGuesses(0);
    setGameIndex(0);
    setCurrentGuess([]);
    setCurrentResort(null);
  };

  const guess = () => {

    if (currentGuess.length && currentGuess[0].toLowerCase() ===  currentResort.name.toLowerCase()) {
      setTotalCorrectGuesses(totalCorrectGuesses + 1);
      alert('Correct!');
    } else {
      alert(`Wrong! Answer is ${currentResort.name}.`);
    }
    setCurrentGuess([]);
    setGameIndex(gameIndex + 1);
  };

  useEffect(() => {
    setCurrentResort(resorts[mapIndicies[gameIndex]]);
  });

  useEffect(() => {
    // Check if game is over
    if (gameIndex >= resorts.length) {
      alert(`Game over! You got ${totalCorrectGuesses} of ${mapIndicies.length} correct!`);
      resetState();
    }
  });


  return (
    <div className="App">
      <flex className="App-header">
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
                  if (e.key === 'Enter') {
                    guess();
                  }
                }}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={guess}>
                  Submit
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </FormGroup>
        </Form>
        
      </flex>
      <footer>
        All artwork beautifully painted by <a href="https://jamesniehues.com" target="_blank" rel="noopener noreferrer">James Niehues</a>.
      </footer>
    </div>
  );
}

export default App;

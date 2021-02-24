import React, { useContext } from 'react';
import TextEntry from './textEntry';
import HintPopover from './hintPopover';
import { Button } from '@material-ui/core';
import { context } from '../../context';
import { SubmitGuess } from '../../actions';

const NonMobileGuessControls = () => {
    const { state, dispatch } = useContext(context);

    return (
        <>
          <TextEntry />
          <Button
            variant="contained"
            onClick={() => dispatch(SubmitGuess())}
            disabled={state.guess.selection === null || state.guess.showResult}
          >
            Submit
          </Button>
          <HintPopover />
          <Button
            variant="contained"
            onClick={() => dispatch(SubmitGuess())}
            disabled={state.guess.showResult}
          >
            Give up
          </Button>
        </>
    );
};

export default NonMobileGuessControls;
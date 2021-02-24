import React, { useContext, useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { resorts } from '../../util';
import { context } from '../../context';
import { UpdateGuess, SubmitGuess } from '../../actions';
import { TextField } from '@material-ui/core';
import IResort from '../../types/resort';
import { currentResortSelector } from '../../selectors';

const TextEntry = () => {
    const {
        state,
        dispatch
    } = useContext(context);

    const keyHandler = (e: any) => {
        if (e.nativeEvent.code == 'Enter') {
            dispatch(SubmitGuess());
        }
    }

    const selectionHandler = (selection: IResort | null) => {
        dispatch(UpdateGuess(
            selection,
            state.guess.input
        ));
    }

    const inputHandler = (input: string) => {
        dispatch(UpdateGuess(
            state.guess.selection,
            input
        ));
    }

    return (
        <Autocomplete
            id="text-entry"
            options={resorts}
            value={state.guess.selection}
            onKeyPress={keyHandler}
            onChange={(_event: any, newValue: IResort | null) => {
                selectionHandler(newValue);
            }}
            inputValue={state.guess.input}
            onInputChange={(_event: any, newValue: string) => {
                inputHandler(newValue);
            }}
            getOptionLabel={(option) => option.name}
            openOnFocus
            autoHighlight
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a resort"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps
                    }}
                    error={state.guess.showResult && !state.guess.isCorrect}
                    helperText={state.guess.showResult && currentResortSelector(state).name}
                />
            )}
        />
    );
}

export default TextEntry;
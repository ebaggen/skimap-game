import React, { useContext, useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import resorts from "../../constants/resorts";
import { context } from "../../context";
import { UpdateGuess, SubmitGuess } from "../../actions/gameActions";
import { TextField } from "@material-ui/core";
import IResort from "../../types/resort";

const TextEntry = () => {
  const { state, dispatch } = useContext(context);

  const keyHandler = (e: any) => {
    switch (e.nativeEvent.code) {
      case "Enter":
        dispatch(SubmitGuess());
        break;
    }
  };

  const selectionHandler = (selection: IResort | null) => {
    dispatch(UpdateGuess(selection, state.guess.input));
  };

  const inputHandler = (input: string) => {
    dispatch(UpdateGuess(state.guess.selection, input));
  };

  return (
    <Autocomplete
      fullWidth
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
      autoHighlight
      renderInput={(params) => (
        <TextField
          {...params}
          autoFocus
          label="Choose a resort"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default TextEntry;

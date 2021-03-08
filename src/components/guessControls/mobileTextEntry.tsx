import React, { useState, useContext, useEffect } from "react";
import TextEntry from "./textEntry";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "@material-ui/core";
import { context } from "../../context";

const mobileTextEntry = () => {
  const [showDialog, setShowDialog] = useState(false);

  const { state, dispatch } = useContext(context);

  useEffect(() => {
    setShowDialog(false);
  }, [state.guess.selection]);

  return (
    <div>
      <Dialog onClose={() => setShowDialog(false)} open={showDialog} fullWidth>
        <TextEntry />
      </Dialog>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter resort name"
        onClick={() => setShowDialog(true)}
        value={state.guess.selection ? state.guess.selection.name : ""}
      />
    </div>
  );
};

export default mobileTextEntry;

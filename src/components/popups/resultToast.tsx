import React, { useContext, useEffect } from "react";
import { context } from "../../context";
import currentResortSelector from "../../selectors/currentResortSelector";
import { useSnackbar } from "notistack";

const ResultToast = () => {
  const { state } = useContext(context);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (state.guess.showResult) {
      enqueueSnackbar(
        state.guess.isCorrect ? "Correct!" : currentResortSelector(state).name,
        {
          variant: state.guess.isCorrect ? "success" : "error",
        }
      );
    } else {
      closeSnackbar();
    }
  });

  return <div />;
};

export default ResultToast;

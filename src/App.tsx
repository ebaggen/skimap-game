import React, { useContext } from "react";
import { AppProvider, context } from "./context";
import { SnackbarProvider } from "notistack";
import Game from "./components/game";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

const App = () => {
  const { state } = useContext(context);

  return (
    <AppProvider>
      <ThemeProvider theme={state.theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={1} hideIconVariant>
          <Game />
        </SnackbarProvider>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;

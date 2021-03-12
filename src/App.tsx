import React, { useContext } from "react";
import { AppProvider, context } from "./context";
import { SnackbarProvider } from "notistack";
import Game from "./components/game";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

const App = () => {
  const { state } = useContext(context);

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={1} hideIconVariant>
          <Game />
        </SnackbarProvider>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;

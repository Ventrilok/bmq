import React from "react";
import MyLobby from "./lobby/mylobby";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme.js";
import { SnackbarProvider } from "notistack";

const App = () => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <MyLobby />
    </SnackbarProvider>
  </ThemeProvider>
);

export default App;

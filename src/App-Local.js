import React from "react";
import { Client } from "boardgame.io/react";
import { Local } from "boardgame.io/multiplayer";
import BlancMangerQQ from "./game/game";
import BlancMangerQQBoard from "./components/board/board";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme.js";
import { SnackbarProvider } from "notistack";

const GameClient = Client({
  game: BlancMangerQQ,
  board: BlancMangerQQBoard,
  multiplayer: Local(),
  numPlayers: 3,
  debug: false
});

const App = () => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <div>
        <GameClient gameID="multi" playerID="0" />
        <br />
      </div>
      <div>
        <GameClient gameID="multi" playerID="1" />
        <br />
      </div>
      <div>
        <GameClient gameID="multi" playerID="2" />
        <br />
      </div>
    </SnackbarProvider>
  </ThemeProvider>
);

export default App;

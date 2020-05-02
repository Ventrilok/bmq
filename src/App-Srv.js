import React from 'react';
import { Client } from 'boardgame.io/react';
import { Local, SocketIO } from 'boardgame.io/multiplayer';
import BlancMangerQQ from "./game/game";
import BlancMangerQQBoard from "./components/board/board";

const GameClient = Client({
      game: BlancMangerQQ,
      board: BlancMangerQQBoard,
      multiplayer: SocketIO({ server: 'https://e76a720c.ngrok.io' }),
      numPlayers: 3,
      debug: true,
    }
)

class App extends React.Component {
  state = { playerID: null };

  render() {
    if (this.state.playerID === null) {
      return (
        <div>
          <p>Play as</p>
          <button onClick={() => this.setState({ playerID: "0" })}>
            Player 0
          </button>
          <button onClick={() => this.setState({ playerID: "1" })}>
            Player 1
          </button>
          <button onClick={() => this.setState({ playerID: "2" })}>
            Player 2
          </button>
        </div>
      );
    }
    return (
      <div>
        <GameClient playerID={this.state.playerID} />
      </div>
    );
  }
}

export default App;

import { setup } from "./setup";
import { moves } from "./moves";
import { phases } from "./phases";
import { isAllPlayerReady } from "../utils/utils";

const BlancMangerQQ = {
  name: "Blanc-Manger-QQ",
  setup: setup,
  moves: moves,
  phases: phases,
  seed: (+new Date()).toString(36).slice(-10),
  turn: {
    onMove: (G, ctx) => {
      console.log("onMove");
      if (isAllPlayerReady(G.players)) {
        let nbWinner = 0;
        for (let i = 0; i < ctx.numPlayers; i++) {
          if (G.players[i].score === G.firstAt) {
            nbWinner++;
          }
        }
        if (nbWinner > 1) {
          G.firstAt++;
        }
      }
    }
  },
  endIf: (G, ctx) => {
    if (isAllPlayerReady(G.players)) {
      for (let i = 0; i < ctx.numPlayers; i++) {
        console.log(
          "Player: " +
            i +
            " Score: " +
            G.players[i].score +
            " firstAt: " +
            G.firstAt +
            " test: " +
            (G.players[i].score >= G.firstAt)
        );
        if (G.players[i].score >= G.firstAt) {
          return i;
        }
      }
    }
  }
};

export default BlancMangerQQ;

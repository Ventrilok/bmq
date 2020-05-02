import { moves } from "../moves";
import { isAllPlayerReady } from "../../utils/utils";

export const vote = {
  next: "ready",
  moves: {
    voteAnswer: moves.voteAnswer
  },
  // turn:{
  //     activePlayers: ActivePlayers.ALL_ONCE
  // },
  onBegin: (G, ctx) => {
    console.log("Phase Vote Begin");
  },
  onEnd: (G, ctx) => {
    console.log("Phase Vote End");
    for (let i = 0; i < ctx.numPlayers; i++) {
      G.players[i].ready = false;
    }
    return G;
  },
  endIf: (G, ctx) => {
    return isAllPlayerReady(G.players);
  }
};

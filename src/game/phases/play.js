import { moves } from "../moves";
import { isAllPlayerReady } from "../../utils/utils";
export const play = {
  next: "vote",
  moves: {
    playCard: moves.playCard,
    changeHand: moves.changeHand
  },
  // turn: {
  //   activePlayers: ActivePlayers.ALL_ONCE
  // },
  onBegin: (G, ctx) => {
    console.log("Phase Play Begin");
  },
  onEnd: (G, ctx) => {
    console.log("Phase Play End");
    for (let i = 0; i < ctx.numPlayers; i++) {
      G.players[i].ready = false;
    }
    return G;
  },
  endIf: (G, ctx) => {
    return isAllPlayerReady(G.players);
  }
};

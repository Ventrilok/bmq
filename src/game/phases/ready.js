import { moves } from "../moves";
import { isAllPlayerReady } from "../../utils/utils";

export const ready = {
  start: true,
  next: "play",
  moves: {
    ready: moves.ready
  },
  // turn: {
  //   activePlayers: ActivePlayers.ALL_ONCE
  // },
  onBegin: (G, ctx) => {
    console.log("Phase Ready Begin");
    moves.ready(G, ctx);
  },
  onEnd: (G, ctx) => {
    console.log("Phase Ready End");
    for (let i = 0; i < ctx.numPlayers; i++) {
      G.players[i].ready = false;
    }
    return G;
  },
  endIf: (G, ctx) => {
    return isAllPlayerReady(G.players);
  }
};

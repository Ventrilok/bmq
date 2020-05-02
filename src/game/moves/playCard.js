export const playCard = (G, ctx, index, playerID) => {
  console.log("Move playCard by Player " + index + " " + playerID);
  G.players[playerID].selectedCard = index;
  G.players[playerID].ready = true;
  ctx.events.endTurn();
};

export const voteAnswer = (G, ctx, selectedPlayer, playerID) => {
  console.log("Move voteAnswer by Player " + playerID);
  G.players[selectedPlayer].score++;
  G.players[playerID].ready = true;
  ctx.events.endTurn();
};

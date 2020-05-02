import constant from "../../constant";
export const changeHand = (G, ctx, playerID) => {
  G.players[playerID].hasChangedCard = true;
  for (let j = 0; j < constant.NB_CARD_IN_HAND; j++) {
    G.players[playerID].hand[j] = G.answerDeck.pop();
  }
};

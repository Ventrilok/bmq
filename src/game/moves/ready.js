import { size, isNil } from "lodash";
import constant from "../../constant";

export const ready = (G, ctx) => {
  console.log("Move ready");
  if (size(G.questionDeck) > 0) {
    G.currentQuestion = G.questionDeck.pop();

    //Distribute new card for every removed card
    for (let i = 0; i < ctx.numPlayers; i++) {
      //remove previously played card if any
      if (G.players[i].selectedCard != null) {
        G.players[i].hand.splice(G.players[i].selectedCard, 1, null);
        G.players[i].selectedCard = null;
      }

      for (let j = 0; j < constant.NB_CARD_IN_HAND; j++) {
        if (isNil(G.players[i].hand[j])) {
          G.players[i].hand[j] = G.answerDeck.pop();
        }
      }
      G.players[i].ready = true;
    }
  } else {
    ctx.events.endGame();
  }
};

import constant from "../constant";
import questions from "../data/questions.json";
import answers from "../data/answers.json";
import Shuffle from "lodash";
const createPlayer = idx => ({
  id: idx,
  ready: false,
  score: 0,
  hand: new Array(constant.NB_CARD_IN_HAND),
  selectedCard: null,
  name: "Joueur",
  playerColor: "",
  hasChangedCard: false
});

function createPlayers(num) {
  const players = [];
  for (let i = 0; i < num; i++) {
    players[i] = createPlayer(i);
  }
  return players;
}

function loadQuestions(ctx) {
  console.log("loadQuestions");
  return Shuffle(ctx.random.Shuffle(questions));
}

function loadAnswers(ctx) {
  console.log("loadAnswer");
  return Shuffle(ctx.random.Shuffle(answers));
}

export function setup(ctx) {
  const Game = {
    firstAt: constant.FIRST_AT,
    questionDeck: loadQuestions(ctx),
    currentQuestion: "",
    answerDeck: loadAnswers(ctx),
    players: createPlayers(ctx.numPlayers)
  };

  return Game;
}

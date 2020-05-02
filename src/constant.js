const FIRST_AT = 15;
const NB_QUESTIONS_TO_PLAY = FIRST_AT;
const NB_CARD_IN_HAND = 8;
const DEBUG = false;
const APP_API_URL = "http://192.168.1.170:3000";

//const GAME_SERVER = "https://30e22a20.ngrok.io";
//const LOBBY_SERVER = "https://30e22a20.ngrok.io";

const GAME_SERVER = "http://192.168.1.170:2468";
const LOBBY_SERVER = "http://192.168.1.170:2468";

module.exports = {
  NB_CARD_IN_HAND,
  NB_QUESTIONS_TO_PLAY,
  FIRST_AT,
  GAME_SERVER,
  LOBBY_SERVER,
  APP_API_URL,
  DEBUG
};

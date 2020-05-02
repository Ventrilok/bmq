import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Question from "../card/question";
import AnswerDeck from "../card/answerdeck";
import VoteDeck from "../card/votedeck";
import ScoreBoard from "../scoreboard/scoreboard";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import constant from "../../constant";
//import { withSnackbar } from "notistack";



const useStyles = theme => ({});


class BlancMangerQQBoard extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    currentQuestion: PropTypes.string
  };
  constructor() {
    super();
    this.state = {
      playersNames: [],
      isLoadingNames: false
    };
  }

  // Let the parents listen for requests
  handleAnswerSelect = index => {
    this.props.moves.playCard(index, this.props.playerID);
  };

  handleVoteSelect = selectedPlayerID => {
    this.props.moves.voteAnswer(selectedPlayerID, this.props.playerID);
  };

  handleChangeHand = () => {
    this.props.moves.changeHand(this.props.playerID);
  };

  render() {
    let qText = this.props.G.currentQuestion.text;
    if (this.props.ctx.gameover) {
      qText =
        "Franchement, " +
        this.props.gameMetadata[this.props.ctx.gameover].name +
        ", c'est quoi le pire ? D'avoir gagné ou d'avoir joué? ";
    }

    let answerDeck = [];

    let isMyTurn = this.props.ctx.currentPlayer == this.props.playerID;

    if (this.props.ctx.phase === "play") {
      answerDeck = (
        <AnswerDeck
          deck={this.props.G.players[this.props.playerID].hand}
          handleAnswerSelect={this.handleAnswerSelect}
          isMyTurn={isMyTurn}
        />
      );
    }

    let voteDeck = [];
    if (this.props.ctx.phase === "vote") {
      voteDeck = (
        <VoteDeck
          playerID={this.props.playerID}
          players={this.props.G.players}
          gameMetadata={this.props.gameMetadata}
          question={qText}
          handleVoteSelect={this.handleVoteSelect}
          isMyTurn={isMyTurn}
        />
      );
    }

    return (
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item xs={2} alignItems="stretch">
            <ScoreBoard
              players={this.props.G.players}
              playerName={this.props.gameMetadata}
              currentPlayer={this.props.ctx.currentPlayer}
            />
            <br />

            <br />
            <Button
              disabled={
                this.props.G.players[this.props.playerID].hasChangedCard
              }
              variant="contained"
              color="primary"
              onClick={this.handleChangeHand}
              startIcon={<FontAwesomeIcon icon={faSadCry} size="3x" />}
            >
              pfff j'aime pas mes cartes
            </Button>
          </Grid>

          <Grid container item spacing={2} xs={10}>
            <Grid item xs={12}>
              <Question text={qText} />
            </Grid>
            {answerDeck}
            {voteDeck}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

//export default withSnackbar(withStyles(useStyles)(BlancMangerQQBoard));
export default withStyles(useStyles)(BlancMangerQQBoard);

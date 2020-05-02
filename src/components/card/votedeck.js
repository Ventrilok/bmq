import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import reactStringReplace from "react-string-replace";
import {shuffle} from "lodash";

const useStyles = theme => ({
  root: {
    borderRadius: 20,
    height: "20vw",
    backgroundColor: theme.palette.common.white
  },
  cardActive: {
    borderRadius: 20,
    height: "20vw",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  answer: {
    fontSize: "15px",
    color: "#CA286E"
  }
});

class voteDeck extends React.Component {
  constructor(props: Props) {
    super(props);
    this.randomizedPlayers = shuffle(this.props.players)
    console.log(this.props)
    this.state = {
      cardActive: "",
      hasSelected: false
    };
    this.baseState = this.state;
  }

  onClick = (index, selectedPlayer) => () => {
    console.log("handleVoteSelect CardDeck " + index);
    if (!this.state.hasSelected && this.props.isMyTurn) {
      this.setState({ cardActive: index, hasSelected: true });
      this.props.handleVoteSelect(selectedPlayer);
    }
  };
  render() {
    const { classes } = this.props;
    let question = this.props.question;



    return this.randomizedPlayers
      .filter(
        aPlayer => aPlayer.id.toString() !== this.props.playerID.toString()
      )
      .map((aPlayer, index) => (
        <Grid item xs={6} sm={4} key={"GridItemCard" + index}>
          <Card
            elevation={index === this.state.cardActive ? 10 : 1}
            button="true"
            onClick={this.onClick(index, aPlayer.id)}
            className={
              index === this.state.cardActive
                ? classes.cardActive
                : classes.root
            }
            key={"VoteCard" + index}
          >
            <CardActionArea>
              <CardContent>
                <Typography align="center" gutterBottom={true}>
                  {reactStringReplace(question, "______", (match, i) => (
                    <span className={classes.answer} key={i}>
                      {aPlayer.hand[aPlayer.selectedCard]}
                    </span>
                  ))}{" "}
                </Typography>
                <Typography align="right" variant="caption" component={"div"}>
                  <br />
                  {"Par " +
                    (this.state.hasSelected && this.props.gameMetadata
                      ? this.props.gameMetadata[aPlayer.id].name
                      : "...")}{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ));
  }
}
export default withStyles(useStyles)(voteDeck);

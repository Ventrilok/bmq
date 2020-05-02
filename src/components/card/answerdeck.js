import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const useStyles = theme => ({
  root: {
    borderRadius: 20,
    height: "20vw",
    backgroundImage: "url('/images/splat.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "150px 150px",
    backgroundColor: theme.palette.common.white
  },
  content: {
    padding: 30
  },
  cardActive: {
    borderRadius: 20,
    height: "20vw",
    backgroundImage: "url('/images/splat.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "150px 150px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
});

class AnswerDeck extends React.Component {
  constructor() {
    super();
    this.state = {
      cardActive: "",
      hasSelected: false
    };
    this.baseState = this.state;
  }

  onClick = index => () => {
    if (!this.state.hasSelected && this.props.isMyTurn) {
      this.setState({ cardActive: index, hasSelected: true });
      this.props.handleAnswerSelect(index);
    }
  };

  render() {
    const { classes } = this.props;
    return this.props.deck.map((aCard, index) => (
      <Grid item xs={6} sm={3} key={"GridItemCard" + index}>
        <Card
          elevation={index === this.state.cardActive ? 10 : 1}
          button="true"
          onClick={this.onClick(index)}
          key={index}
          className={
            index === this.state.cardActive ? classes.cardActive : classes.root
          }
        >
          <CardActionArea>
            <CardContent className={classes.content}>
              <Typography align="center"> {aCard} </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  }
}
export default withStyles(useStyles)(AnswerDeck);

import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Tooltip from "@material-ui/core/Tooltip";
import OnlineRoom from "../OnlineRoom/onlineroom";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import NewRoomDialog from "../lobby/newroomdialog";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  root: {
    backgroundColor: "#fff"
  }
});

class OnlineRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleCreateRoomClick = () => {
    this.setState({ open: true });
  };

  handleCreateRoomClose = nbPlayer => {
    this.setState({ open: false });
    if (nbPlayer > 0) this.props.onCreate(nbPlayer);
  };

  handleRefreshRooms = () => {
    this.props.onRefresh();
  };

  handleJoinRoomClick = (gameId, playerId) => {
    this.props.onJoin(gameId, playerId);
  };

  handleLeaveRoomClick = gameId => {
    this.props.onLeave(gameId);
  };

  handlePlayClick = (gameId, playerId, numPlayers) => {
    this.props.onPlay(gameId, playerId, numPlayers);
  };

  handleSpectateClick = (gameId, numPlayers) => {
    this.props.onSpectate(gameId, numPlayers);
  };

  render() {
    const { gameInstances, playerName, alreadyJoined, selectGame } = this.props;
    const { classes } = this.props;
    let range = [selectGame.minPlayers, selectGame.maxPlayers];

    return (
      <Container>
        <Card className={classes.root}>
          <CardHeader
            title="Toutes les parties"
            subheader="Maximum 5 parties. L'intervalle de synchronisation des parties est de 15 secondes. Vous ne pouvez rejoindre qu'une seule chambre. Les parties ne sont automatiquement supprimées qu'après leur départ."
            action={
              <Fragment>
                <NewRoomDialog
                  open={this.state.open}
                  onClose={this.handleCreateRoomClose}
                  range={range}
                />
                <Tooltip title="Nouvelle Partie">
                  <IconButton
                    color="primary"
                    disabled={gameInstances.length > 4}
                    onClick={this.handleCreateRoomClick}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Rafraichir">
                  <IconButton color="primary" onClick={this.handleRefreshRooms}>
                    <AutorenewIcon />
                  </IconButton>
                </Tooltip>
              </Fragment>
            }
          />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Partie</TableCell>
                  <TableCell>Joueurs</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gameInstances.map((gameInstance, index) => (
                  <OnlineRoom
                    key={`game-${gameInstance.gameID}` + index}
                    name={`${gameInstance.gameID}`}
                    roomId={gameInstance.gameID}
                    players={gameInstance.players}
                    playerName={playerName}
                    alreadyJoined={alreadyJoined}
                    onJoin={this.handleJoinRoomClick}
                    onLeave={this.handleLeaveRoomClick}
                    onPlay={this.handlePlayClick}
                    onSpectate={this.handleSpectateClick}
                  />
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default withStyles(useStyles)(OnlineRooms);

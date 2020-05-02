import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const findPlayerSeat = (players, playerName) =>
  players.find(player => player.name === playerName);
const findFreeSeat = players => players.find(player => !player.name);

class StyledRoom extends Component {
  handleJoinClick = () => {
    const { roomId, players } = this.props;
    this.props.onJoin(roomId, findFreeSeat(players).id);
  };

  handleLeaveClick = () => {
    this.props.onLeave(this.props.roomId);
  };

  handlePlayClick = () => {
    const { roomId, players, playerName } = this.props;
    this.props.onPlay(
      roomId,
      `${findPlayerSeat(players, playerName).id}`,
      players.length
    );
  };

  handleSpectateClick = () => {
    const { roomId, players } = this.props;
    this.props.onSpectate(roomId, players.length);
  };

  render() {
    const { name, playerName, players, alreadyJoined } = this.props;
    const playerSeat = findPlayerSeat(players, playerName);
    const freeSeat = findFreeSeat(players);

    return (
      <TableRow key={"game-" + name}>
        <TableCell>{name}</TableCell>
        <TableCell>
          {players.map((aPlayer, index) => (
            <span key={name + "-player-" + index}>
              <Chip label={aPlayer.name || "..."} icon={<FaceIcon />} />
              &nbsp;
            </span>
          ))}
        </TableCell>
        <TableCell align="right">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            {freeSeat && !playerSeat && !alreadyJoined && (
              <Button
                startIcon={<PersonAddIcon />}
                variant="contained"
                onClick={this.handleJoinClick}
              >
                Rejoindre cette partie
              </Button>
            )}
            {!freeSeat && playerSeat && (
              <Button
                startIcon={<PlayArrowIcon />}
                variant="contained"
                onClick={this.handlePlayClick}
              >
                Jouer à cette partie
              </Button>
            )}
            {playerSeat && (
              <Button
                startIcon={<ExitToAppIcon />}
                variant="contained"
                color="secondary"
                onClick={this.handleLeaveClick}
              >
                Quitter cette partie
              </Button>
            )}
          </ButtonGroup>
        </TableCell>
      </TableRow>
    );
  }
}

export default StyledRoom;

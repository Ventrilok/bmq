import React from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from '@material-ui/core/CardHeader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMehBlank } from "@fortawesome/free-solid-svg-icons";
import { faGrinTongueWink } from "@fortawesome/free-solid-svg-icons";
import { sizing } from '@material-ui/system';

const useStyles = makeStyles({
  scoreboard: {
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  currentPlayer: {
    color: "#CA286E"
  }
});

function Scoreboard(props) {
  const playerName = props.playerName ? props.playerName : props.players;
  const classes = useStyles();

  let PlayerIcon = <FontAwesomeIcon icon={faMehBlank} size="2x" />;
  let currentPlayerIcon = (
    <FontAwesomeIcon
      icon={faGrinTongueWink}
      size="2x"
      className={classes.currentPlayer}
    />
  );

  return (
    <Card className={classes.scoreboard} >
<CardHeader title="Score" />

      <Table size="small" >

              <TableBody>
              {playerName.map((player, index) => (
                <TableRow key={player.name}>
                <TableCell component="th" scope="row">
                <Badge
                  key={"Badge" + index}
                  color="secondary"
                  overlap="rectangle"
                  badgeContent={props.players[index].score}
                >
                  <Chip
                    icon={
                      index == props.currentPlayer ? currentPlayerIcon : PlayerIcon
                    }
                    label={playerName[index].name}
                  />
                </Badge>
              </TableCell>
                </TableRow >
              ))}
</TableBody>
</Table>


    </Card>
  );
}

export default Scoreboard;

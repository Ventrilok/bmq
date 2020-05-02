import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  classes: {
    flexGrow: 1
  }
}));

function OnlineExit({ exitButtonLabel, playerName, onExit }) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.classes}>
          Bienvenue {playerName} à Blanc-Manger-QQ
        </Typography>
        <Tooltip title={exitButtonLabel}>
          <IconButton onClick={onExit}>
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default OnlineExit;

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff"
  }
}));

function NewRoomDialog(props) {
  const { open, onClose, range } = props;
  const classes = useStyles();
  const [nbPlayer, setPlayer] = React.useState(2);

  const handleChange = (event, value) => {
    setPlayer(value);
  };

  const handleClose = () => {
    onClose(nbPlayer);
  };

  const handleCancel = () => {
    onClose(0);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="alert-dialog-title" className={classes.root}>
        Combien de joueurs dans cette nouvelle partie ? &nbsp;
      </DialogTitle>
      <DialogContent className={classes.root}>
        <DialogContentText id="alert-dialog-description">
          <br />
          <Slider
            defaultValue={2}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={1}
            min={range[0]}
            max={range[1]}
            onChange={handleChange}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.root}>
        <Button onClick={handleCancel} variant="contained" color="secondary">
          En fait, non j'ai pas d'amis
        </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
          autoFocus
        >
          Vas-y, crée moi cette partie
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewRoomDialog;

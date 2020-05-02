import React from "react";
import Button from "@material-ui/core/Button";
import { withTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import GavelIcon from "@material-ui/icons/Gavel";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import FaceIcon from "@material-ui/icons/Face";
import constant from "../constant";

class OnlineLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changingPlayerName: props.playerName
    };
  }

  handlePlayerNameChange = ({ target: { value } }) => {
    this.setState({ changingPlayerName: value });
  };

  handleLogin = () => {
    this.props.onLogin(this.state.changingPlayerName);
  };

  getErrorMessage = (changingPlayerName, playersNames) => {
    if (!changingPlayerName) {
      return "Ton nom ne peut pas être vide";
    }
    if (changingPlayerName.length > 10) {
      return "Pas plus de 15 caractères stp";
    }
    // TODO load players names from AUTH server
    if (playersNames.includes(changingPlayerName)) {
      return "Sois plus inspiré, ce nom est déjà pris";
    }
    return null;
  };

  render() {
    const { changingPlayerName } = this.state;
    const { playersNames } = this.props;

    const errorMessage = this.getErrorMessage(changingPlayerName, playersNames);
    const hasError = !!errorMessage;

    return (
      <Container>
        <h1> Bienvenue à Blanc Manger QQ </h1>
        <Card elevation={10}>
          <CardHeader
            avatar={
              <Avatar>
                <GavelIcon />
              </Avatar>
            }
            title="Quelques règles pour bien comprendre"
            subheader="mais c'est extrêmement simple..."
          />
          <Divider />
          <CardContent>
            <Typography variant="body1" component={"span"}>
              <CheckCircleOutlineIcon /> A chaque tour, une question ou
              proposition est affichée avec un blanc (----) à compléter.
              <br />
              <CheckCircleOutlineIcon /> Les autres joueurs doivent alors
              chercher parmi leurs cartes réponses celle qui leur paraît la plus
              appropriée.
              <br />
              <CheckCircleOutlineIcon /> Une fois que tous joueurs ont choisi
              leur carte, le jeu affiche les réponses anonymement de tous les
              joueurs.
              <br />
              <CheckCircleOutlineIcon /> Chaque joueur vote pour la réponse
              qu'il préfère en cliquant sur la carte vote.
              <br />
              <CheckCircleOutlineIcon /> Le but étant d'être le premier à gagner{" "}
              {constant.NB_FIRST_AT} de points.
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Card elevation={10}>
          <CardHeader
            avatar={
              <Avatar style={{ fontSize: 50 }}>
                <FaceIcon />
              </Avatar>
            }
            title="A part ça, t'es qui toi ?"
          />
          <Divider />
          <CardContent>
            <Typography variant="body1" component={"span"}>
              <TextField
                label="Trouve-toi un nom sympa"
                error={hasError}
                helperText={errorMessage}
                margin="normal"
                value={changingPlayerName}
                variant="outlined"
                onKeyPress={({ key }) =>
                  !hasError && key === "Enter" && this.handleLogin()
                }
                onChange={this.handlePlayerNameChange}
              />
            </Typography>
            <br />
            <Button
              disabled={hasError}
              variant="contained"
              color="primary"
              onClick={this.handleLogin}
            >
              C'est bon j'ai compris, je viens jouer !
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default OnlineLogin;

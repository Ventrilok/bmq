import React from "react";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";

const handleGoHome = () => window.open(`/`, "_self");

const Error = ({ children }) => (
  <div>
    Oups y a une couille dans le potage
    <br />
    {children}
    <Container center>
      <Fab variant="extended" color="primary" onClick={handleGoHome}>
        On retourne à la maison
      </Fab>
    </Container>
  </div>
);

export default Error;

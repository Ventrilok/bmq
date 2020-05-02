import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 20,
    height: "13vw",
    backgroundImage: "url('/images/splat2.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "150px 150px",
    backgroundColor: "#036F8B"
  },
  content: {
    padding: 10,
    color: "#fff"
  }
}));

function Question(props) {
  const cardStyles = useStyles();
  return (
    <Card elevation={8} className={cardStyles.root}>
      <CardContent className={cardStyles.content}>
        <Typography variant="h4" component={"span"} gutterBottom={true}>
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Question;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    marginBottom: 10
  }
});

export default function PlayerCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" color="primary" component="h2">
            {props.players.name}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            Country: {props.players.country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Searched: {props.players.searches}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

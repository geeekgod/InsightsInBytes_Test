import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./home.css";
import {
  Link,
} from "react-router-dom";
import TopBar from "../topbar/TopBar";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "InsightsInBytes"
  })
  const classes = useStyles();

  const cardDat = props.data.dat.map((item, pos) => {
    return (
      <div key={pos} className="col-lg-4 col-md-6">
        <Card className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.head}
          </Typography>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.imgUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.summary}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Link to={`/feed/post/` + item.url} >
              <Button size="small" color="primary">
                Learn More
            </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  });

  return (
    <>
      <TopBar />
      <div className="wrapper">
        <div className="row">{cardDat}</div>
      </div>
    </>
  );
}
